import React from 'react';
import classnames from 'classnames';
import './icons.styles.scss';

interface RsIconCheckProps {
  indeterminate: boolean;
}

const RsIconCheck = ({ ...props }: RsIconCheckProps) => {
  const { indeterminate = false } = props;
  const checkIconClasses = classnames('rs-icon-check', {
    indeterminate: indeterminate
  });
  return (
    <i className={checkIconClasses}>
      <span>
        <div className='line1'></div>
        <div className='line2'></div>
      </span>
    </i>
  );
};

export default RsIconCheck;
