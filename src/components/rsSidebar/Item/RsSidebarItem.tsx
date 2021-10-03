import React from "react";

import classnames from "classnames";

import RsIconArrow from "../../../icons/arrow";

import "./RsSidebarItem.styles.scss";

const RsSidebarItem = ({ ...props }) => {
  const { active, icon, children, arrow } = props;

  const SidebarItemClasses = classnames(
    "rs-sidebar__item",
    { active: active },
    { hasIcon: icon }
  );

  return (
    <button className={SidebarItemClasses}>
      {icon ? <div className="rs-sidebar__item__icon">{icon}</div> : null}
      <div className="rs-sidebar__item__text">{children}</div>
      <div className="rs-sidebar__item__text-tooltip">{children}</div>
      {arrow ? (
        <div className="rs-sidebar__item__arrow">
          <RsIconArrow />
        </div>
      ) : null}
    </button>
  );
};

export default RsSidebarItem;
