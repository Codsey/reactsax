import React from 'react';
import classnames from 'classnames';
import './icons.styles.scss';

interface RsPlusMinusIconProps {
  less: boolean;
  [x: string]: any;
}

const RsPlusMinusIcon = ({ ...props }: RsPlusMinusIconProps) => {
  const { less, ...rest } = props;
  const RsPlusMinusIconClasses = classnames('rs-icon-plus', { less: less });

  return <i className={RsPlusMinusIconClasses} {...rest}></i>;
};

export default RsPlusMinusIcon;
