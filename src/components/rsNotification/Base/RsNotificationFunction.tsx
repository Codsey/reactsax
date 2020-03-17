import React from 'react';
import RsNotification from './RsNotification';
import ReactDOM from 'react-dom';

interface NotificationParams {
  title?: string;
  text?: string;
  position?: string;
  color?: string;
  border?: string;
  icon?: string | JSX.Element;
  duration?: number;
  onClick?: any;
  buttonClose?: boolean;
  flat?: boolean;
  onDestroy?: any;
  sticky?: boolean;
  square?: boolean;
  width?: string;
  loading?: boolean;
  notPadding?: any;
  content?: any;
  clickClose?: boolean;
  classNotification?: string;
}
const Notification = (params: NotificationParams) => {
  const {
    title,
    text,
    content,
    loading,
    border,
    icon,
    flat,
    sticky,
    square,
    width,
    notPadding,
    color,
    duration = 4,
    position
  } = params;
  const notification = (
    <RsNotification
      title={title}
      text={text}
      content={content}
      loading={loading}
      border={border}
      icon={icon}
      flat={flat}
      sticky={sticky}
      square={square}
      width={width}
      notPadding={notPadding}
      color={color}
      duration={duration}
      closeButton
      notificationPosition={position}
    ></RsNotification>
  );

  if (!document.querySelector('.notification-container')) {
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
  }

  ReactDOM.render(
    notification,
    document.querySelector('.notification-container')
  );

  const container = document.querySelector('.notification-container');
  document.body.removeChild(container as Element);
};

export default Notification;
