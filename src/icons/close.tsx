import React from 'react';
import classnames from 'classnames';
import './icons.styles.scss';

interface RsIconCloseProps {
  hover: string | null;
}

const RsIconClose = ({ ...props }: RsIconCloseProps) => {
  const { hover } = props;
  const RsIconCloseClasses = classnames('rs-icon-close', [
    `rs-icon-hover-${hover}`
  ]);

  return <i className={RsIconCloseClasses}></i>;
};

export default RsIconClose;
