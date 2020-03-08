import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index';
import './RsButton.styles.scss';
import { setComponentColor } from '../../../util/index';

class RsButton extends React.Component<any> {
  buttonRef: React.RefObject<HTMLButtonElement>;
  constructor(props: any) {
    super(props);

    this.buttonRef = React.createRef();
  }

  render() {
    const {
      children,
      componentColor = 'primary',
      size = null,
      color = 'primary',
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
      rippleProp
    } = this.props;
    const buttonClasses = classnames(
      'rs-button',
      `rs-button--${componentColor}`,
      `rs-button--size-${size}`,
      { 'rs-component-dark': color === 'dark' || componentColor === 'dark' },
      { 'rs-change-color': color || componentColor },
      { 'rs-button--fff': color === '#fff' },
      { 'rs-button--active': active },
      { 'rs-button--active-disabled': disabled },
      { 'rs-button--icon': icon },
      { 'rs-button--circle': circle },
      { 'rs-button--square': square },
      { 'rs-button--loading': loading },
      { 'rs-button--upload': upload },
      { 'rs-button--block': block },
      { 'rs-button--animate': animate },
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

    const animateButtonClasses = classnames(
      'rs-button__animate',
      `rs-button__animate--${animationType}`
    );

    const rippleEffect = (e: any) => {
      if (rippleProp === 'reverse') {
        rippleReverse(e);
      } else if (rippleProp === 'cut') {
        rippleCut(e);
      } else {
        if (flat) {
          ripple(
            e,
            (componentColor || color || 'primary') &&
              !active &&
              document.activeElement !== this.buttonRef.current
              ? componentColor || color
              : null,
            flat && !active && document.activeElement !== this.buttonRef.current
          );
        } else {
          ripple(e, null, false);
        }
      }
    };
    console.log(setComponentColor(color || componentColor));
    return (
      <button
        className={buttonClasses}
        ref={this.buttonRef}
        onMouseDown={e => rippleEffect(e)}
        style={
          {
            '--rs-color': setComponentColor(
              color || componentColor || 'primary'
            )
          } as CSSProperties
        }
      >
        <div className='rs-button__content'>{children}</div>
        {loading ? <div className='rs-button__loading'> </div> : null}
        {animate ? (
          <div className={animateButtonClasses}>{animate.props.children} </div>
        ) : null}
      </button>
    );
  }
}

export default RsButton;
