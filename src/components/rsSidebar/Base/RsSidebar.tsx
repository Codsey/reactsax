import React, { useState, useEffect } from "react";

import classnames from "classnames";

import "./RsSidebar.styles.scss";

import { setComponentColor } from "../../../util/index";

interface RsSidebarProps {
  open?: boolean;
  notLineActive?: boolean;
  square?: boolean;
  notShadow?: boolean;
  textWhite?: boolean;
  relative?: boolean;
  absolute?: boolean;
  right?: boolean;
  hoverExpand?: boolean;
  logo?: any;
  header?: JSX.Element;
  children?: React.ReactNode;
  footer?: JSX.Element;
  color?: string;
  reduce?: boolean;
}

const RsSidebar = ({ ...props }: RsSidebarProps) => {
  const SidebarRef: React.RefObject<HTMLDivElement> = React.createRef();

  const {
    open,
    notLineActive,
    square,
    notShadow,
    textWhite,
    relative,
    absolute,
    right,
    hoverExpand,
    logo,
    header,
    children,
    footer,
    color = "",
    reduce,
  } = props;

  const [reduceInternal, setReduceInternal] = useState(reduce);
  const staticWidth = "260px";

  useEffect(() => {
    const el = SidebarRef.current;
    if (reduceInternal && el) {
      el.style.width = "50px";
    } else if (el && !reduceInternal) {
      el.style.width = staticWidth;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceInternal]);

  const SidebarContentClasses = classnames(
    "rs-sidebar-content",
    { reduce: reduceInternal },
    { open: open },
    { notLineActive: notLineActive },
    { square: square },
    { notShadow: notShadow },
    { textWhite: textWhite },
    { relative: relative },
    { absolute: absolute },
    { right: right }
  );

  return (
    <div
      className={SidebarContentClasses}
      ref={SidebarRef}
      onMouseEnter={() => {
        if (hoverExpand && reduce) {
          setReduceInternal(false);
        }
      }}
      onMouseLeave={() => {
        if (hoverExpand && reduce) {
          setReduceInternal(true);
        }
      }}
      style={
        {
          "--rs-background": setComponentColor(color || ""),
        } as React.CSSProperties
      }
    >
      {logo ? <div className="rs-sidebar__logo">{logo}</div> : null}
      {header ? <div className="vs-sidebar__header">{header}</div> : null}
      <div className="rs-sidebar">{children}</div>
      {footer ? <div className="rs-sidebar__footer">{footer}</div> : null}
    </div>
  );
};

export default RsSidebar;
