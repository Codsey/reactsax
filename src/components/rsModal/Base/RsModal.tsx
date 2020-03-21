import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import RsIconClose from '../../../icons/close';
import './RsModal.styles.scss';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';

interface RsModalProps {
  active?: boolean;
  blur?: boolean;
  fullScreen?: boolean;
  notPadding?: boolean;
  square?: boolean;
  autoWidth?: boolean;
  scroll?: boolean;
  loading?: boolean;
  notCenter?: boolean;
  notClose?: boolean;
  overflowHidden?: boolean;
  header?: string | JSX.Element;
  children?: string | JSX.Element;
  footer?: string | JSX.Element;
  preventClose?: boolean;
  handleClose?: () => void;
}

const RsModal = ({ ...props }: RsModalProps) => {
  const [rebound, setRebound] = useState(false);
  const dialogRef: React.RefObject<any> = React.createRef();
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
    overflowHidden,
    header,
    children,
    footer,
    preventClose,
    handleClose
  } = props;

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    if (overflowHidden && active) document.body.style.overflow = 'hidden';

    return () => window.removeEventListener('keydown', handleEsc);
  });

  const handleEsc = (e: any) => {
    if (e.which === 27 && !preventClose) {
      handleInternalClose(dialogRef.current);
    }
  };

  const handleInternalClose = (el: Element) => {
    if (el) {
      el.classList.add('rs-dialog-leave-active');
      el.classList.add('rs-dialog-leave-to');
      setTimeout(() => {
        if (handleClose) {
          if (overflowHidden) {
            document.body.style.overflow = '';
          }
          handleClose();
        }
      }, 100);
    }
  };

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

  return (
    <CSSTransition
      timeout={300}
      in={active}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: 'rs-dialog-enter-active'
      }}
    >
      <React.Fragment>
        {active ? (
          ReactDOM.createPortal(
            <div
              className={dialogContentClasses}
              ref={dialogRef}
              onClick={(e: any) => {
                if (!e.target.closest('.rs-dialog') && !preventClose) {
                  handleInternalClose(dialogRef.current);
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
                    onClick={() => handleInternalClose(dialogRef.current)}
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
