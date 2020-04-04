import React, { ReactNode } from 'react';
import classnames from 'classnames';
import './RsGrid.styles.scss';

interface RsColProps {
  w?: string | number;
  offset?: string | number;
  order?: number | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
  lg?: string | number;
  sm?: string | number;
  xs?: string | number;
  children?: ReactNode;
}

const RsCol = ({ ...props }: RsColProps) => {
  const {
    w = 12,
    offset = 0,
    lg = 0,
    sm = 0,
    xs = 0,
    order = 0,
    children,
  } = props;

  const colClasses = classnames(
    'rs-col',
    [`rs-col--w-${w}`],
    [`rs-col--offset-${offset}`],
    [`rs-col--lg-${lg}`],
    [`rs-col--sm-${sm}`],
    [`rs-col--xs-${xs}`]
  );

  return (
    <div className={colClasses} style={{ order: order }}>
      {children}
    </div>
  );
};

export default RsCol;
