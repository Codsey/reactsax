import React from 'react';
import RsNotification from './RsNotification';
import ReactDOM from 'react-dom';

interface NotificationParams {
  title?: string;
  text?: string;
  position?: string;
  color?: string;
  border?: string;
  icon?: string;
  duration?: number | string;
  onClick?: any;
  buttonClose?: boolean;
  flat?: boolean;
  onDestroy?: any;
  sticky?: boolean;
  square?: boolean;
  width?: string;
  loading?: boolean;
  progress?: any;
  notPadding?: any;
  content?: any;
  clickClose?: boolean;
  classNotification?: string;
}
const Notification = (params: NotificationParams) => {
  const notification = (
    <RsNotification
      title={params.title}
      text={params.text}
      loading={params.loading}
      border={params.border}
      icon={params.icon}
      flat={params.flat}
      sticky={params.sticky}
      square={params.square}
      width={params.width}
      notpadding={params.notPadding}
      progress={params.progress}
      closeButton
      notificationPosition={params.position}
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
