import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import RsIconClose from '../../../icons/close';
import './RsModal.styles.scss';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

const RsModal = ({ ...props }) => {
  const [rebound, setRebound] = useState(false);
  const {
    active,
    blur,
    fullScreen,
    notPadding,
    square,
    autoWidth,
    scroll,
    loading,
    notCenter,
    notClose,
    header,
    children,
    footer,
    preventClose,
    handleClose
  } = props;

  const dialogContentClasses = classnames(
    'rs-dialog-content',
    { blur: blur },
    { fullScreen: fullScreen }
  );

  const dialogClasses = classnames(
    'rs-dialog',
    { 'rs-dialog--fullScreen': fullScreen },
    { 'rs-dialog--rebound': rebound },
    { 'rs-dialog--notPadding': notPadding },
    { 'rs-dialog--square': square },
    { 'rs-dialog--autoWidth': autoWidth },
    { 'rs-dialog--scroll': scroll },
    { 'rs-dialog--loading': loading },
    { 'rs-dialog--notCenter': notCenter }
  );

  const dialogChildrenClasses = classnames('rs-dialog__content', {
    notFooter: !footer
  });

  const handleInternalClose = (e: any) => {
    // console.log(e.target);

    const el = e.target;
    el.classList.add('rs-dialog-leave-active');
    el.classList.add('rs-dialog-leave-to');
    setTimeout(() => {
      handleClose();
    }, 100);
  };
  return (
    <CSSTransition
      timeout={300}
      in={active}
      mountOnEnter
      unmountOnExit
      classNames={{
        // enter: 'rs-dialog-enter',
        enterActive: 'rs-dialog-enter-active'
      }}
    >
      <React.Fragment>
        {active ? (
          ReactDOM.createPortal(
            <div
              className={dialogContentClasses}
              onClick={(e: any) => {
                if (!e.target.closest('.rs-dialog') && !preventClose) {
                  handleInternalClose(e);
                }

                if (preventClose && !e.target.closest('.rs-dialog')) {
                  setRebound(true);
                  setTimeout(() => {
                    setRebound(false);
                  }, 300);
                }
              }}
            >
              <div className={dialogClasses}>
                {loading ? (
                  <div className='rs-dialog__loading'>
                    <div className='rs-dialog__loading__load'></div>
                  </div>
                ) : null}
                {!notClose ? (
                  <button
                    className='rs-dialog__close'
                    onClick={handleInternalClose}
                  >
                    <RsIconClose hover='x' />
                  </button>
                ) : null}
                <header className='rs-dialog__header'>{header}</header>
                <div className={dialogChildrenClasses}>{children}</div>
                <footer className='rs-dialog__footer'>{footer}</footer>
              </div>
            </div>,
            document.body
          )
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    </CSSTransition>
  );
};

export default RsModal;
