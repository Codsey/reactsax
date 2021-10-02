import React from "react";

import "./RsNavbarItem.styles.scss";

import classnames from "classnames";

const RsNavbarItem = ({ ...props }) => {
  const { active, children } = props;

  const ButtonClasses = classnames("rs-navbar__item", { active: active });

  return <button className={ButtonClasses}>{children}</button>;
};

export default RsNavbarItem;
