import React, { CSSProperties } from "react";
import classnames from "classnames";
import ripple, { rippleCut, rippleReverse } from "../../../util/ripple/index";
import "./RsButton.styles.scss";
import { setComponentColor } from "../../../util/index";


// TODO: Remove componentColor property

interface RsButtonProps {
  children?: React.ReactNode;
  componentColor?: string;
  color?: string;
  size?: "xl" | "l" | "default" | "small" | "mini";
  active?: boolean;
  disabled?: boolean;
  icon?: boolean;
  circle?: boolean;
  square?: boolean;
  loading?: boolean;
  upload?: boolean;
  block?: boolean;
  animationType?: "vertical" | "scale" | "rotate";
  animateInactive?: boolean;
  flat?: boolean;
  border?: boolean;
  gradient?: boolean;
  relief?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  floating?: boolean;
  animate?: JSX.Element | string;
  rippleProp?: string;
  [x: string]: any;
}

const RsButton = ({ ...props }: RsButtonProps) => {
  const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

  const {
    children,
    componentColor = "primary",
    size = "default",
    color = "primary",
    active,
    disabled,
    icon,
    circle,
    square,
    loading,
    upload,
    block,
    animationType,
    animateInactive,
    flat,
    border,
    gradient,
    relief,
    transparent,
    shadow,
    floating,
    animate,
    rippleProp,
    ...rest
  } = props;
  const buttonClasses = classnames(
    "rs-button",
    // `rs-button--${componentColor}`,
    `rs-button--size-${size}`,
    { "rs-button--primary": color === "primary" },
    { "rs-button--success": color === "success" },
    { "rs-component-dark": color === "dark" || componentColor === "dark" },
    { "rs-change-color": color || componentColor },
    { "rs-button--fff": color === "#fff" },
    { "rs-button--active": active },
    { "rs-button--active-disabled": disabled },
    { "rs-button--icon": icon },
    { "rs-button--circle": circle },
    { "rs-button--square": square },
    { "rs-button--loading": loading },
    { "rs-button--upload": upload },
    { "rs-button--block": block },
    { "rs-button--animate": animate },
    { [`rs-button--animate-${animationType}`]: animationType },
    { "rs-button--animate-inactive": animateInactive },
    {
      "rs-button--default":
        !flat &&
        !border &&
        !gradient &&
        !relief &&
        !transparent &&
        !shadow &&
        !floating,
    },
    { "rs-button--flat": flat },
    { "rs-button--border": border },
    { "rs-button--gradient": gradient },
    { "rs-button--relief": relief },
    { "rs-button--transparent": transparent },
    { "rs-button--shadow": shadow },
    { "rs-button--floating": floating }
  );

  const animateButtonClasses = classnames(
    "rs-button__animate",
    `rs-button__animate--${animationType}`
  );

  const rippleEffect = (e: any) => {
    if (rippleProp === "reverse") {
      rippleReverse(e);
    } else if (rippleProp === "cut") {
      rippleCut(e);
    } else {
      if (flat) {
        ripple(
          e,
          (componentColor || color || "primary") &&
            !active &&
            document.activeElement !== buttonRef.current
            ? componentColor || color
            : null,
          flat && !active && document.activeElement !== buttonRef.current
        );
      } else {
        ripple(e, null, false);
      }
    }
  };
  return (
    <button
      className={buttonClasses}
      ref={buttonRef}
      onMouseDown={(e) => rippleEffect(e)}
      style={
        {
          "--rs-color": setComponentColor(color || componentColor || "primary"),
        } as CSSProperties
      }
      {...rest}
    >
      <div className="rs-button__content">{children}</div>
      {loading ? <div className="rs-button__loading"> </div> : null}
      {animate ? <div className={animateButtonClasses}>{animate} </div> : null}
    </button>
  );
};

export default RsButton;
