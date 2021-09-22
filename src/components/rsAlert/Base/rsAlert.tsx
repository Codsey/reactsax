import React from "react";
import classnames from "classnames";
import "./rsAlert.styles.scss";
// import RsPlusMinusIcon from "../../../icons/plus-minus.icon";
import RsIconClose from "../../../icons/close";
import { Transition } from "react-transition-group";
import { setComponentColor } from "../../../util/index";

interface RsAlertProps {
  children?: React.ReactNode;
  icon?: JSX.Element;
  active?: boolean;
  color?: string;
  solid?: boolean;
  border?: boolean;
  shadow?: boolean;
  relief?: boolean;
  gradient?: boolean;
  title?: string;
  footer?: JSX.Element | string;
  closable?: boolean;
  hiddenContent?: boolean;
  toggleHiddenContent?: any;
  pagination?: string[];
}

class RsAlert extends React.Component<RsAlertProps, any> {
  alertRef: React.RefObject<any>;
  contentRef: React.RefObject<any>;
  constructor(props: RsAlertProps) {
    super(props);
    this.handleClickNextPage = this.handleClickNextPage.bind(this);
    this.handleClickPrevPage = this.handleClickPrevPage.bind(this);
    this.state = {
      page: 0,
      totalPages: 0,
    };
    this.alertRef = React.createRef();
    this.contentRef = React.createRef();
  }

  // TODO: WRITE DRY CODE HERE PLEASE.

  componentDidMount() {
    if (this.alertRef && this.contentRef && this.props.active) {
      setTimeout(() => {
        const el = this.alertRef.current;
        el.style.height = el.scrollHeight - 1 + "px";
        const content = this.contentRef.current;
        content.style.minHeight = content.scrollHeight + "px";
      }, 0);
    } else if (typeof this.props.hiddenContent === "boolean") {
      setTimeout(() => {
        const content = this.contentRef.current;
        content.style.minHeight = 0 + "px";
        content.style.height = content.scrollHeight - 1 + "px";
      }, 0);
    }

    if (this.props.pagination) {
      this.setState({ page: 1, totalPages: this.props.pagination.length });
    }
  }

  handleClickNextPage() {
    const { page, totalPages } = this.state;
    if (page < totalPages) {
      this.setState({ page: page + 1 });
    }
  }

  handleClickPrevPage() {
    const { page } = this.state;
    if (page > 1) {
      this.setState({ page: page - 1 });
    }
  }

  leave(el: any) {
    el.style.minHeight = "0px";
    el.style.height = "0px";
  }

  beforeEnter(el: any) {
    el.style.height = 0;
  }

  enter(el: any) {
    let h = el.scrollHeight;
    el.style.height = h - 1 + "px";
  }

  render() {
    const {
      active,
      color,
      solid,
      border,
      shadow,
      relief,
      gradient,
      title,
      footer,
      children,
      icon,
      closable,
      hiddenContent = null,
      toggleHiddenContent,
      pagination,
    } = this.props;
    const { page, totalPages } = this.state;
    const alertClasses = classnames(
      "rs-alert",
      { "rs-alert--solid": solid },
      { "rs-alert--border": border },
      { "rs-alert--shadow": shadow },
      { "rs-alert--relief": relief },
      { "rs-alert--pages": pagination },
      { "rs-alert--gradient": gradient }
    );
    const titleClasses = classnames("rs-alert__title", {
      "rs-alert__title--clickHidden": typeof hiddenContent === "boolean",
    });
    return (
      <Transition
        component={"span"}
        in={active}
        timeout={500}
        onEnter={(e: any) => this.beforeEnter(e)}
        onEntering={(e: any) => this.enter(e)}
        onExit={(e) => this.leave(e)}
      >
        <div
          className={alertClasses}
          ref={this.alertRef}
          style={
            {
              "--rs-color": setComponentColor(color || "primary"),
            } as React.CSSProperties
          }
        >
          <React.Fragment>
            {icon ? <div className="rs-alert__icon">{icon}</div> : null}
            <div className={titleClasses} onClick={toggleHiddenContent}>
              {title}
              {/* {!closable ? (
                <RsPlusMinusIcon
                  onClick={toggleHiddenContent}
                  less={!hiddenContent}
                />
              ) : null} */}
            </div>

            {closable ? (
              <button className="rs-alert__close">
                {/* onClick={closable} */} <RsIconClose hover="less" />
              </button>
            ) : null}
            <Transition
              component={"span"}
              in={!hiddenContent}
              timeout={500}
              onEnter={(e: any) => this.beforeEnter(e)}
              onEntering={(e: any) => this.enter(e)}
              onExit={(e) => this.leave(e)}
            >
              <div className="rs-alert__content" ref={this.contentRef}>
                <div className="rs-alert__content__text">
                  {pagination ? pagination[page - 1] : children}
                </div>
              </div>
            </Transition>
            {footer ? <div className="rs-alert__footer">{footer}</div> : null}
            {pagination ? (
              <div className="rs-alert__pagination">
                <button onClick={this.handleClickPrevPage}> {"<"} </button>
                <span>{`${page} / ${totalPages}`}</span>
                <button onClick={this.handleClickNextPage}>{">"}</button>
              </div>
            ) : null}
          </React.Fragment>
        </div>
      </Transition>
    );
  }
}

export default RsAlert;
