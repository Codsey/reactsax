import React from 'react';
import classnames from 'classnames';
import './RsAvatar.styles.scss';
import { setComponentColor } from '../../../util/index';

const RsAvatar = ({ ...props }) => {
  const {
    history,
    historyGradient,
    circle,
    square,
    isHidden,
    isLatest,
    icons,
    size,
    textLength,
    text,
    children,
    loading,
    badge,
    badgePosition,
    writing,
    icon,
    color,
    pointer
  } = props;

  const avatarContentClasses = classnames(
    'rs-avatar-content',
    { history: history },
    { 'history--gradient': historyGradient },
    { 'rs-avatar-content--circle': circle },
    { 'rs-avatar-content--square': square },
    { 'rs-avatar-content--hidden': isHidden },
    { 'rs-avatar-content--latest': isLatest },
    { 'rs-avatar-cotnent--hasIcons': icons },
    { [`rs-avatar-content--size--${size}`]: size }
  );

  const avatarClasses = classnames('rs-avatar', {
    [`rs-avatar--letter--${textLength}`]: textLength > 2
  });

  const badgeClasses = classnames(
    'rs-avatar__badge',
    { isSlot: badge },
    { writing: writing },
    badgePosition
  );

  return (
    <div
      className={avatarContentClasses}
      style={
        {
          '--rs-color': setComponentColor(color || ''),
          width: `${size}px`,
          height: `${size}px`,
          cursor: pointer && 'pointer'
        } as React.CSSProperties
      }
    >
      {loading ? (
        <div className='rs-avatar__loading'>
          <div className='rs-avatar__loading__animate'></div>
        </div>
      ) : null}
      <div className={avatarClasses}>
        {text ? text : null}
        {children}
      </div>
      {badge ? (
        <div className={badgeClasses}> {writing ? writing : badge}</div>
      ) : null}
      {isLatest ? (
        <div className='rs-avatar__latest'>{`LENGTH GOES HERE`} </div>
      ) : null}
      {icon ? <div className='rs-avatar__icons'> {icon}</div> : null}
    </div>
  );
};

export default RsAvatar;
