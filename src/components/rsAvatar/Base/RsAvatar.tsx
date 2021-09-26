import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./RsAvatar.styles.scss";
import { setComponentColor } from "../../../util/index";

// TODO: Ability to change text colors

interface RsAvatarProps {
  history?: boolean;
  historyGradient?: boolean;
  circle?: boolean;
  square?: boolean;
  icons?: boolean;
  size?: Number;
  text?: string;
  children?: React.ReactNode;
  loading?: boolean;
  badge?: boolean | string | JSX.Element;
  badgePosition?: "top-right" | "top-left" | "bottom-left" | "";
  badgeColor?: string;
  writing?: boolean;
  icon?: JSX.Element;
  color?: string;
  pointer?: boolean;
}

const RsAvatar = ({ ...props }: RsAvatarProps) => {
  const avatarRef: React.RefObject<any> = React.createRef();

  const [max, setMax] = useState(0);
  const [elIndex, setIndex] = useState(0);
  const [avatarLength, setAvatarLength] = useState(0);
  const [group, setGroup] = useState(false);

  const {
    history,
    historyGradient,
    circle,
    square,
    icons,
    size,
    text,
    children,
    loading,
    badge,
    badgePosition,
    badgeColor,
    writing,
    icon,
    color,
    pointer,
  } = props;

  const getText = (text: string) => {
    const trimmedText = text.trim();
    let getLetters = [trimmedText];
    if (trimmedText.length > 5) {
      getLetters = trimmedText.split(/\s/g).map((item) => {
        return item[0];
      });
    }
    return getLetters;
  };

  const getTextLength = (text?: string) => {
    if (text && text.length <= 5) {
      return text.length;
    }
  };

  useEffect(() => {
    const el = avatarRef.current;
    if (el && el.parentNode.className.includes("rs-avatar__group")) {
      setGroup(true);
      setIndex(Array.from(el.parentNode.children).indexOf(avatarRef.current));
      setMax(el.parentNode.getAttribute("data-max"));
      setAvatarLength(el.parentNode.childElementCount);
    }
  }, [avatarRef]);

  const avatarContentClasses = classnames(
    "rs-avatar-content",
    { history: history },
    { "history--gradient": historyGradient },
    { "rs-avatar-content--circle": circle },
    { "rs-avatar-content--square": square },
    { "rs-avatar-content--hidden": group && elIndex > max - 1 },
    { "rs-avatar-content--latest": group && elIndex === max - 1 },
    { "rs-avatar-cotnent--hasIcons": icons },
    { [`rs-avatar-content--size--${size}`]: size }
  );

  const avatarClasses = classnames("rs-avatar", {
    [`rs-avatar--letter--${getTextLength(text)}`]: text,
  });

  const badgeClasses = classnames(
    "rs-avatar__badge",
    { isSlot: typeof badge !== "boolean" },
    { writing: writing },
    badgePosition
  );

  return (
    <div
      ref={avatarRef}
      className={avatarContentClasses}
      style={
        {
          "--rs-color": setComponentColor(color || ""),
          "--rs-badge": setComponentColor(badgeColor || "primary"),
          width: `${size}px`,
          height: `${size}px`,
          cursor: pointer && "pointer",
        } as React.CSSProperties
      }
    >
      {loading ? (
        <div className="rs-avatar__loading">
          <div className="rs-avatar__loading__animate"></div>
        </div>
      ) : null}
      <div className={avatarClasses}>
        {text ? getText(text) : null}
        {children}
      </div>
      {badge ? (
        <div className={badgeClasses}>
          {" "}
          {writing ? (
            <div className="rs-avatar__points">
              <div className="rs-avatar__points__point" />
              <div className="rs-avatar__points__point" />
              <div className="rs-avatar__points__point" />
            </div>
          ) : (
            badge
          )}
        </div>
      ) : null}
      {group && elIndex === max - 1 ? (
        <div className="rs-avatar__latest">
          {`+${avatarLength - elIndex - 1}`}{" "}
        </div>
      ) : null}
      {icon ? <div className="rs-avatar__icons"> {icon}</div> : null}
    </div>
  );
};

export default RsAvatar;
