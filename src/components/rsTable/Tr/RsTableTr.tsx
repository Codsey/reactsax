import React from "react";
import classnames from "classnames";

import "./RsTableTr.styles.scss";

import { setComponentColor } from "../../../util/index";

const RsTableTr = ({ ...props }) => {
  const { isSelected, expand, isExpand, children, color } = props;

  const tableTrClasses = classnames(
    "rs-table__tr",
    { "rs-change-color": color },
    { selected: isSelected },
    { expand: expand },
    { isExpand: isExpand }
  );

  return (
    <tr
      style={
        {
          "--rs-color": setComponentColor(color || "primary"),
        } as React.CSSProperties
      }
      className={tableTrClasses}
    >
      {children}
    </tr>
  );
};

export default RsTableTr;
