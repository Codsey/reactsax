import React from "react";
import classnames from "classnames";

import "./RsTable.styles.scss";

const RsTable = ({ ...props }) => {
  const theadRef: React.RefObject<HTMLTableSectionElement> = React.createRef();

  // const [value, setValue] = useState("");
  // const [colspan, setColspan] = useState(0);

  const {
    header,
    footer,
    striped,
    isMultipleSelected,
    children,
    notFound,
  } = props;

  const tableDivClasses = classnames(
    "rs-table",
    // { isSelectedValue: value },
    { striped: striped },
    { isMultipleSelected: isMultipleSelected }
  );
  return (
    <div className="rs-table-content">
      {header ? <header className="rs-table__header">{header}</header> : null}
      <div className={tableDivClasses}>
        <table>
          <thead ref={theadRef} className="rs-table__thead">
            {children.filter((obj: any) => obj.props.thead)}
          </thead>
          <tbody className="rs-table__tbody">
            {children.filter((obj: any) => !obj.props.thead)}
          </tbody>
          {notFound ? (
            <tbody className="rs-table_not-found">
              <tr>
                <td>{notFound || "No matching records found"}</td>
              </tr>
            </tbody>
          ) : null}
        </table>
      </div>
      {footer ? <footer className="rs-table__footer">{footer}</footer> : null}
    </div>
  );
};

export default RsTable;
