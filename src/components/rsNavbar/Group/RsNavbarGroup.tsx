import React from "react";

import "./RsNavbarGroup.styles.scss";

const RsNavbarGroup = ({ ...props }) => {
  const { title, children } = props;
  return (
    <div className="rs-navbar__group">
      <button className="rs-navbar__group__item">{title}</button>
      <div className="rs-navbar__group__items">{children}</div>
    </div>
  );
};

export default RsNavbarGroup;
