import React, { ReactNode } from 'react';
import './RsGrid.styles.scss';

interface RsRowProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?:
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse';
  children?: ReactNode;
}

const RsRow = ({ ...props }: RsRowProps) => {
  const { justifyContent, alignItems, flexDirection, children } = props;
  return (
    <div
      className='rs-row'
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
      }}
    >
      {children}
    </div>
  );
};

export default RsRow;
