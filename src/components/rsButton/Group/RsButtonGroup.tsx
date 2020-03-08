import React from 'react';
import './RsButtonGroup.styles.scss';

interface RsButtonGroupProps {
  children: React.ReactNode;
  [x: string]: any;
}

const RsButtonGroup = ({ ...props }: RsButtonGroupProps) => {
  const { children } = props;
  return <div className='rs-button-group'>{children}</div>;
};

export default RsButtonGroup;
