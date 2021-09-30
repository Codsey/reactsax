import React from "react";
import classnames from "classnames";

import "./RsTableTr.styles.scss";

const RsTableTr = ({ ...props }) => {
  const { isSelected, expand, isExpand, children } = props;

  const tableTrClasses = classnames(
    "rs-table__tr",
    { selected: isSelected },
    { expand: expand },
    { isExpand: isExpand }
  );

  return <tr className={tableTrClasses}>{children}</tr>;
};

export default RsTableTr;
