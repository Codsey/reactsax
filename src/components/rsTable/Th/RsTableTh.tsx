import React from "react";
import classnames from "classnames";
import RsIconArrow from "../../../icons/arrow";

import "./RsTableTh.styles.scss";

const RsTableTh = ({ ...props }) => {
  const { sort, children } = props;
  const tableThClasses = classnames("rs-table__th", { sort: sort });

  return (
    <th className={tableThClasses}>
      <div className="rs-table__th__content">
        {children}
        {sort ? (
          <div className="rs-table__th__content__icons">
            <RsIconArrow className="icon-sort-1" />
            <RsIconArrow className="icon-sort-2" />
          </div>
        ) : null}
      </div>
    </th>
  );
};

export default RsTableTh;
