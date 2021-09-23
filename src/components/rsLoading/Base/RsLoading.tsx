import React from "react";
import classnames from "classnames";
import "./RsLoading.styles.scss";
import { setComponentColor } from "../../../util";

interface RsLoadingProps {
  isVisible?: boolean;
  type?:
    | "default"
    | "waves"
    | "corners"
    | "border"
    | "points"
    | "square"
    | "gradient"
    | "rectangle"
    | "circles"
    | "square-rotate"
    | "scale";
  target?: boolean;
  color?: string;
  background?: string;
  scale?: string | number;
  text?: string;
  percent?: string | number;
  progress?: string | number;
  opacity?: string | number;
}

const RsLoading = ({ ...props }: RsLoadingProps) => {
  const {
    isVisible,
    type,
    target,
    background = "primary",
    color,
    scale,
    text,
    percent,
    progress,
    opacity,
  } = props;

  const visibleClasses = classnames(
    "rs-loading",
    [`rs-loading--${type || "default"}`],
    { "rs-loading--target": target },
    { "rs-loading--background": background }
  );
  return (
    <React.Fragment>
      {isVisible ? (
        <div
          className={visibleClasses}
          style={
            {
              "--rs-color": setComponentColor(color || "primary"),
              "--rs-background": background
                ? setComponentColor(background)
                : null,
              "--rs-opacity": opacity,
            } as React.CSSProperties
          }
        >
          <div
            className="rs-loading__load"
            style={{ transform: `scale(${scale})` }}
          >
            <div className="rs-loading__load__animation">
              <div className="rs-loading__load__percent">
                {percent ? `${percent}%` : null}
              </div>
              <div className="rs-loading__load__animation__1"></div>
              <div className="rs-loading__load__animation__2"></div>
              <div className="rs-loading__load__animation__3"></div>
            </div>
            <div className="rs-loading__load__text">{text}</div>
          </div>
          {progress ? (
            <div className="rs-loading__progress">
              <div
                className="rs-loading__progress__bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default RsLoading;
