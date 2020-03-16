import React from 'react';
import RsNotification from './RsNotification';
import ReactDOM from 'react-dom';
const Notification = (params: any) => {
  //   const [isVisible, setVisible] = useState(false);

  const notification = (
    <RsNotification
      title={'Reactsax Notification'}
      loading
      text='👉 Hello, I have been working on a really hard research and I came to a conclusion that Baro is Gay'
      closeButton
      notificationPosition='top-left'
    ></RsNotification>
  );

  //   const children = document.querySelector(
  //     `.rs-notification-parent--${params.position || 'bottom-right'}`
  //   )?.childNodes;
  //   const allChilds = Array.prototype.slice.call(children);

  //   const test = allChilds.map(child => child.innerHTML);

  //   const parent = React.createElement(
  //     'div',
  //     {
  //       className: `.rs-notification-parent--${params.position || 'bottom-right'}`
  //     },

  //     notification
  //   );

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

  //   const parent: HTMLElement =
  //     document.querySelector(
  //       `.rs-notification-parent--${params.position || 'bottom-right'}`
  //     ) || document.createElement('div');

  //   if (
  //     !document.querySelector(
  //       `.rs-notification-parent--${params.position || 'bottom-right'}`
  //     )
  //   ) {
  //     parent.className = 'rs-notification-parent';
  //     parent.classList.add(
  //       `rs-notification-parent--${params.position || 'bottom-right'}`
  //     );
  //   }

  //   if (params.classNotification) {
  //     parent.classList.add(params.classNotification);
  //   }
};

export default Notification;
