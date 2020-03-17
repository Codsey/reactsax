import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './RsNotification.styles.scss';
import RsIconClose from '../../../icons/close';
import { CSSTransition } from 'react-transition-group';
import { setComponentColor } from '../../../util/index';

interface RsNotificationProps {
  title?: string;
  text?: string;
  notificationPosition?: string;
  color?: string;
  border?: string;
  icon?: string | JSX.Element;
  duration: number;
  onClick?: any;
  closeButton?: boolean;
  flat?: boolean;
  sticky?: boolean;
  square?: boolean;
  width?: string;
  loading?: boolean;
  notPadding?: any;
  content?: any;
  classNotification?: string;
}

const RsNotification = ({ ...props }: RsNotificationProps) => {
  const notificationRef: React.RefObject<any> = React.createRef();
  const [isVisible, setVisible] = useState(false);

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
    classNotification,
    notificationPosition,
    title,
    text,
    closeButton,
    duration,
    content
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
    if (notificationRef.current) {
      parent.appendChild(notificationRef.current);
      document.body.appendChild(parent);
    }
    setVisible(true);
    if (!sticky) {
      setTimeout(() => {
        if (notificationRef.current) {
          destroy();
        }
      }, duration * 1000 || 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationRef, notificationPosition]);

  const destroy = () => {
    notificationRef.current.classList.add(
      'notification-leave-active',
      'notification-leave-to'
    );
    const parent = notificationRef.current.parentNode;
    if (parent.childNodes.length === 1) {
      return setTimeout(() => {
        document.body.removeChild(parent);
      }, 500);
    }
    setTimeout(() => {
      parent.removeChild(notificationRef.current);
    }, 500);
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
    classNotification
  );
  return (
    <CSSTransition
      timeout={100}
      in={isVisible}
      onEnter={beforeEnter}
      onEntered={enter}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: 'notification-enter',
        enterActive: 'notification-enter-active'
      }}
    >
      {isVisible ? (
        <div
          className={notificatinClasses}
          ref={notificationRef}
          style={
            {
              '--rs-color': setComponentColor(color || ''),
              '--rs-border': setComponentColor(border || '')
            } as React.CSSProperties
          }
        >
          {!loading && icon ? (
            <div className='rs-notification__icon'>{icon}</div>
          ) : null}
          {!loading && !content ? (
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
          {!loading && content ? (
            <div className='rs-notification__content'>
              <div className='rs-notification__content__header'>{title}</div>
              <div className='rs-notification__content__text'>{text}</div>
              {content}
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
        </div>
      ) : (
        <React.Fragment />
      )}
    </CSSTransition>
  );
};

export default RsNotification;
