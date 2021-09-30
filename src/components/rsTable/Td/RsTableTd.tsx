import React from "react";
import classnames from "classnames";
import "./RsTableTd.styles.scss";

const RsTableTd = ({ ...props }) => {
  const { checkbox, edit, children } = props;

  const RsTdClasses = classnames(
    "rs-table__td",
    { isCheckbox: checkbox },
    { isEdit: edit }
  );

  return <td className={RsTdClasses}>{children}</td>;
};

export default RsTableTd;
