import React from 'react';
import classnames from 'classnames';

const RsButton = ({ ...props }) => {
  const {
    componentColor,
    size,
    color,
    active,
    activeDisabled,
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
    floating
  } = props;
  const buttonClasses = classnames(
    'rs-button',
    `rs-button--${componentColor}`,
    `rs-button--size-${size}`,
    { 'rs-button-fff': color.toLowerCase() === '#fff' },
    { 'rs-button-active': active },
    { 'rs-button--active-disabled': activeDisabled },
    { 'rs-button--icon': icon },
    { 'rs-button--circle': circle },
    { 'rs-button--square': square },
    { 'rs-button--loading': loading },
    { 'rs-button--upload': upload },
    { 'rs-button--block': block },
    // TODO: Add 'rs-button--animate' if animate exists in the children.
    { [`rs-button--animate-${animationType}`]: animationType },
    { 'rs-button--animate-inactive': animateInactive },
    {
      'rs-button--default':
        !flat &&
        !border &&
        !gradient &&
        !relief &&
        !transparent &&
        !shadow &&
        !floating
    },
    { 'rs-button--flat': flat },
    { 'rs-button--border': border },
    { 'rs-button--gradient': gradient },
    { 'rs-button--relief': relief },
    { 'rs-button--transparent': transparent },
    { 'rs-button--shadow': shadow },
    { 'rs-button--floating': floating }
  );
  return <button className={buttonClasses}></button>;
};

export default RsButton;
