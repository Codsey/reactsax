import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./RsNavbar.styles.scss";

import { setComponentColor } from "../../../util/index";

interface RsNavbarProps {
  fixed?: boolean;
  shadow?: boolean;
  shadowScroll?: boolean;
  hideScroll?: boolean;
  textWhite?: boolean;
  paddingScroll?: boolean;
  square?: boolean;
  color?: string;
  children?: any;
}

const RsNavbar = ({ ...props }: RsNavbarProps) => {
  const NavbarRef: React.RefObject<any> = React.createRef();

  const {
    fixed,
    shadow,
    textWhite,
    paddingScroll,
    shadowScroll,
    square,
    color,
    children,
    hideScroll,
  } = props;

  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [paddingScrollActive, setPaddingScrollActive] = useState(false);
  const [shadowScrollActive, setShadowScrollActive] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos < currentScrollPos;
    console.log(shadowScrollActive);
    if (hideScroll) {
      setHidden(visible);
      setPrevScrollPos(currentScrollPos);
    } else if (paddingScroll) {
      if (window.pageYOffset > 0) {
        setPaddingScrollActive(true);
      } else {
        setPaddingScrollActive(false);
      }
    } else if (shadowScroll) {
      if (window.pageYOffset > 0) {
        setShadowScrollActive(true);
      } else {
        setShadowScrollActive(false);
      }
    }
  };

  useEffect(() => {
    if (hideScroll || paddingScroll || shadowScroll) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navbarContentClasses = classnames(
    "rs-navbar-content",
    { fixed: fixed },
    { shadow: shadow },
    { hidden: hidden },
    { shadowActive: shadowScrollActive },
    { textWhite: textWhite },
    { paddingScroll: paddingScroll },
    { paddingScrollActive: paddingScrollActive },
    { rsNavbarSquare: square }
  );

  return (
    <div
      ref={NavbarRef}
      style={
        {
          "--rs-color": setComponentColor(color || ""),
        } as React.CSSProperties
      }
      className={navbarContentClasses}
    >
      <div className="rs-navbar">{children}</div>
    </div>
  );
};

export default RsNavbar;
