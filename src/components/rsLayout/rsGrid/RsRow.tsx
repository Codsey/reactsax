import React, { ReactNode } from "react";
import "./RsGrid.styles.scss";

interface RsRowProps {
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexDirection?:
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "column"
    | "column-reverse"
    | "row"
    | "row-reverse";
  children?: ReactNode;
}

const RsRow = ({ ...props }: RsRowProps) => {
  const {
    justifyContent,
    alignItems,
    flexDirection,
    children,
    ...rest
  } = props;
  return (
    <div
      className="rs-row"
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default RsRow;
