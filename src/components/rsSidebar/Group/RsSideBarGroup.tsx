import React, { useState } from "react";

import classnames from "classnames";

import { Transition } from "react-transition-group";

import "./RsSidebarGroup.styles.scss";

const RsSidebarGroup = ({ ...props }) => {
  const { header, children } = props;
  const [open, setOpen] = useState(false);
  const SidebarGroupClasses = classnames("rs-sidebar__group", {
    open: open,
  });

  const beforeEnter = (el: any) => {
    el.style.height = 0;
  };

  const enter = (el: any) => {
    const h = el.scrollHeight;
    el.style.height = h - 1 + "px";
  };

  const leave = (el: any) => {
    el.style.minHeight = "0px";
    el.style.height = "0px";
  };

  return (
    <div className={SidebarGroupClasses}>
      <div
        className="rs-sidebar__group__header"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {header}
      </div>
      <Transition
        component={"div"}
        in={open}
        mountOnEnter
        timeout={100}
        onEnter={(e: any) => beforeEnter(e)}
        onEntered={(e: any) => enter(e)}
        onExit={(e: any) => leave(e)}
      >
        <div className="rs-sidebar__group__content">{children}</div>
      </Transition>
    </div>
  );
};

export default RsSidebarGroup;
