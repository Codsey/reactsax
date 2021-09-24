import React from "react";
import classnames from "classnames";
import "./RsCheckbox.styles.scss";
import RsIconCheck from "../../../icons/check";
import { setComponentColor, generateID } from "../../../util/index";

// TODO: Add Value to Checkboxes

interface RsInputProps {
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  labelBefore?: boolean;
  icon?: JSX.Element;
  indeterminate?: boolean;
  lineThrough?: boolean;
  children?: React.ReactNode;
  color?: string;
  [x: string]: any;
}

const RsCheckbox = ({ ...props }: RsInputProps) => {
  const id = React.useRef(generateID());
  const {
    checked,
    disabled,
    loading,
    labelBefore,
    icon,
    indeterminate = false,
    lineThrough,
    children,
    color,
    // onChange,
    ...rest
  } = props;

  // let isChecked = React.useRef(checked || false);

  const checkboxContentClasses = classnames(
    "rs-checkbox-content",
    { "rs-checkbox--checked": checked },
    { "rs-checkbox--disabled": disabled },
    { "rs-checkbox--loading": loading },
    { "rs-checkbox--label-before": labelBefore }
  );

  const checkboxLabelClasses = classnames("rs-checkbox-label", {
    lineThrough: lineThrough,
  });
  return (
    <div
      className={checkboxContentClasses}
      style={
        {
          "--rs-color": setComponentColor(color || "primary"),
        } as React.CSSProperties
      }
    >
      <div className="rs-checkbox-con">
        <input
          id={id.current}
          type="checkbox"
          className="rs-checkbox"
          checked={checked}
          // onChange={() => {
          //   // isChecked.current = !isChecked.current;
          //   if (typeof onChange === "function") {
          //     onChange();
          //   }
          // }}
          {...rest}
        />
        <div className="rs-checkbox-mask">
          {!icon ? <RsIconCheck indeterminate={indeterminate} /> : null}
          {icon}
        </div>
      </div>
      <label htmlFor={id.current} className={checkboxLabelClasses}>
        {children}
      </label>
    </div>
  );
};

export default RsCheckbox;
