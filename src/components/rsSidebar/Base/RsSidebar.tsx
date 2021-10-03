import React, { useState } from "react";

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
}

const RsSidebar = ({ ...props }) => {
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
  } = props;

  const [reduceInternal, setReduceInternal] = useState(false);

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
      onMouseEnter={() => {
        if (hoverExpand) {
          setReduceInternal(false);
        }
      }}
      onMouseLeave={() => {
        if (hoverExpand) {
          setReduceInternal(true);
        }
      }}
      style={
        {
          "--rs-color": setComponentColor(color || ""),
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
