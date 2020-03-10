import React from 'react';
import classnames from 'classnames';
import './RsLoading.styles.scss';
import { setComponentColor } from '../../../util';

const RsLoading = ({ ...props }) => {
  const {
    isVisible,
    type,
    target,
    background,
    color,
    scale,
    text,
    percent,
    progress
  } = props;

  const visibleClasses = classnames(
    'rs-loading',
    [`rs-loading--${type || 'default'}`],
    { 'rs-loading--target': target },
    { 'rs-loading--background': background }
  );
  console.log(isVisible);
  return (
    <React.Fragment>
      {isVisible ? (
        <div
          className={visibleClasses}
          style={
            {
              '--rs-color': setComponentColor(color || 'primary'),
              '--rs-background': setComponentColor(background)
            } as React.CSSProperties
          }
        >
          <div
            className='rs-loading__load'
            style={{ transform: `scale(${{ scale }})` }}
          >
            <div className='rs-loading__load__animation'>
              <div className='rs-loading__load__percent'> {percent}</div>
              <div className='rs-loading__load__animation__1'></div>
              <div className='rs-loading__load__animation__2'></div>
              <div className='rs-loading__load__animation__3'></div>
            </div>
            <div className='rs-loading__load__text'>{text}</div>
          </div>
          {progress ? (
            <div className='rs-loading__progress'>
              <div
                className='rs-loading__progress__bar'
                style={{ width: `${progress}` }}
              ></div>
            </div>
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default RsLoading;
