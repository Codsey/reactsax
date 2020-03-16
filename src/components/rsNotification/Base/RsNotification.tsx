import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './RsNotification.styles.scss';
import RsIconClose from '../../../icons/close';
import { CSSTransition } from 'react-transition-group';

const RsNotification = ({ ...props }) => {
  const notificationRef: React.RefObject<any> = React.createRef();
  const [isVisible, setVisible] = useState(false);
  const [closeTrigger, setCloseTrigger] = useState(true);
  const {
    color,
    border,
    icon,
    onClick,
    flat,
    sticky,
    square,
    width,
    loading,
    notPadding,
    colorName,
    classNotification,
    // isVisible,
    notificationPosition,
    title,
    text,
    closeButton,
    progress
  } = props;

  useEffect(() => {
    const parent: HTMLElement =
      document.querySelector(
        `.rs-notification-parent--${notificationPosition || 'bottom-right'}`
      ) || document.createElement('div');

    if (
      !document.querySelector(
        `.rs-notification-parent--${notificationPosition || 'bottom-right'}`
      )
    ) {
      parent.className = 'rs-notification-parent';
      parent.classList.add(
        `rs-notification-parent--${notificationPosition || 'bottom-right'}`
      );
    }
    // console.log(notificationRef.current);
    if (notificationRef.current) {
      parent.appendChild(notificationRef.current);
      document.body.appendChild(parent);
    }
    setVisible(true);
  }, [notificationPosition, notificationRef]);

  const destroy = () => {
    // setCloseTrigger(false);
    const parent = notificationRef.current.parentNode;
    if (parent.childNodes.length === 0) {
      document.body.removeChild(parent);
    }
    parent.removeChild(notificationRef.current);
  };

  const beforeEnter = (el: any) => {
    el.style.maxHeight = `0px`;
    el.style.padding = `0px 20px`;
  };

  const enter = (el: any) => {
    const h = el.scrollHeight;
    el.style.maxHeight = `${h + 40}px`;
    if (window.innerWidth < 600) {
      el.style.padding = `15px`;
    } else {
      el.style.padding = `20px`;
    }
  };

  const leave = (el: any) => {
    //   const parent = this.$el.parentNode;
    //   setTimeout(() => {
    //     done();
    //     if (parent.childNodes.length == 1) {
    //       document.body.removeChild(parent);
    //     }
    //     parent.removeChild(this.$el);
    //     this.$destroy();
    //     if (this.onDestroy) {
    //       this.onDestroy();
    //     }
    //   }, 250);
    console.log(el);
    // destroy();
  };

  const notificatinClasses = classnames(
    'rs-notification',
    { 'rs-notification--color': color },
    { 'rs-notification--border': border },
    { 'rs-notification--icon': icon },
    { 'rs-notoficiation--onClick': onClick },
    { 'rs-notification--flat': flat },
    { 'rs-notification--sticky': sticky },
    { 'rs-notification--square': square },
    { 'rs-notification--width-all': width === '100%' },
    { 'rs-notification--width-auto': width === 'auto' },
    { 'rs-notification--loading': loading },
    { 'rs-notification--notPadding': notPadding },
    [`rs-notification--${colorName}`],
    classNotification
  );

  return (
    <CSSTransition
      timeout={100}
      in={isVisible}
      onEnter={beforeEnter}
      onEntering={enter}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: 'notification-enter',
        enterActive: 'notification-enter-active',
        exit: 'notification-leave-to'
      }}
      //   onExited={leave}
    >
      {isVisible ? (
        <div className={notificatinClasses} ref={notificationRef}>
          {!loading && icon ? (
            <div className='rs-notification__icon'>{icon}</div>
          ) : null}
          {!loading ? (
            <div className='rs-notification__content'>
              {title ? (
                <div className='rs-notification__content__header'>
                  <h4>{title}</h4>
                </div>
              ) : null}
              {text ? (
                <div className='rs-notification__content__text'>
                  <p>{text}</p>
                </div>
              ) : null}
            </div>
          ) : null}
          {closeButton ? (
            <button
              className='rs-notification__close'
              onClick={() => destroy()}
            >
              <RsIconClose hover='less' />{' '}
            </button>
          ) : null}
          {loading ? <div className='rs-notification__loading'> </div> : null}
          <div
            className='rs-notification__progress'
            style={{ width: `${progress}%` }}
          >
            {' '}
          </div>
        </div>
      ) : (
        <React.Fragment />
      )}
    </CSSTransition>
  );
};

export default RsNotification;
