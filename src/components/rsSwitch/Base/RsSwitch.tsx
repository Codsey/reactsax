import React from 'react';
import classnames from 'classnames';
import './RsSwitch.styles.scss';
import { setComponentColor } from '../../../util/index';

interface RsSwitchProps {
  loading?: boolean;
  square?: boolean;
  indeterminate?: boolean;
  icon?: boolean;
  circle?: boolean;
  switchOn?: JSX.Element | string;
  switchOff?: JSX.Element | string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: Function;
  color?: string;
}

const RsSwitch = ({ ...props }: RsSwitchProps) => {
  const isChecked = React.useRef(false);
  const {
    loading,
    square,
    indeterminate,
    icon,
    circle,
    switchOn,
    switchOff,
    children,
    checked,
    onChange,
    color
  } = props;

  const switchClasses = classnames(
    'rs-switch',
    { 'rs-switch--loading': loading },
    { 'rs-switch--square': square },
    { 'rs-switch--indeterminate': indeterminate },
    { 'rs-swtich--icon': icon }
  );

  return (
    <div
      className={switchClasses}
      style={
        {
          '--rs-color': setComponentColor(color || 'primary')
        } as React.CSSProperties
      }
    >
      <input
        type='checkbox'
        className='rs-switch__input'
        checked={isChecked.current || checked}
        onChange={() => {
          isChecked.current = !isChecked.current;
          if (typeof onChange === 'function') {
            onChange();
          }
        }}
      />
      <div className='rs-switch__circle'> {circle} </div>
      <div className='rs-switch__text on'>{switchOn ? switchOn : children}</div>
      <div className='rs-switch__text off'>
        {switchOff ? switchOff : children}
      </div>
      <div className='rs-switch__background'></div>
    </div>
  );
};

export default RsSwitch;
