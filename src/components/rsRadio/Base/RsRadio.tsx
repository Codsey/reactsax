import React from 'react';
import classnames from 'classnames';
import './RsRadio.styles.scss';
import { setComponentColor, generateID } from '../../../util/index';

interface RsRadioProps {
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  labelBefore?: string;
  icon?: JSX.Element | string;
  color?: string;
  value: string;
  name?: string;
  active: string;
  [x: string]: any;
}

const RsRadio = ({ ...props }: RsRadioProps) => {
  const id: React.RefObject<any> = React.useRef(generateID());

  const {
    disabled,
    loading,
    label,
    labelBefore,
    icon,
    color,
    value,
    name,
    active,
    ...rest
  } = props;

  const isChecked = () => {
    return value === active;
  };

  const radioContentClasses = classnames(
    'rs-radio-content',
    { disabled: disabled },
    { loading: loading },
    { active: isChecked() }
  );

  return (
    <div
      className={radioContentClasses}
      style={
        {
          '--rs-color': setComponentColor(color || 'primary')
        } as React.CSSProperties
      }
    >
      {labelBefore ? (
        <label htmlFor={id.current} className='rs-radio__label'>
          {labelBefore}
        </label>
      ) : null}
      <div className='rs-radio'>
        <input
          type='radio'
          value={value}
          name={name || active}
          checked={isChecked()}
          id={id.current}
          {...rest}
        />
        <span className='rs-radio__effect'>
          <span className='rs-radio__effect__icon'>{icon}</span>
          <span className='rs-radio__effect__loading'></span>
        </span>
      </div>
      {label ? (
        <label htmlFor={id.current} className='rs-radio__label'>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default RsRadio;
