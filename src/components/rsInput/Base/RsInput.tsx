import React, { useState } from 'react';
import classnames from 'classnames';
import { setComponentColor } from '../../../util/index';
import './RsInput.styles.scss';

interface RsInputProps {
  state?: string;
  border?: boolean;
  label?: string;
  labelPlaceholder?: string;
  color?: string;
  icon?: JSX.Element;
  iconAfter?: boolean;
  placeholder?: string;
  type?: string;
  iconClick?: any; // TODO: ADD FUNCTIONALITY TO iconClick
  loading?: boolean;
  progress?: number | string;
  messageType?: string;
  message?: string;
  [x: string]: any;
}
const RsInput = ({ ...props }: RsInputProps) => {
  const [value, setValue] = useState('');
  const {
    state,
    border,
    shadow,
    label,
    labelPlaceholder,
    color,
    icon,
    iconAfter,
    placeholder,
    type,
    iconClick,
    loading,
    progress = 0,
    messageType,
    message,
    onChange,
    ...rest
  } = props;

  const parentClasses = classnames(
    'rs-input-parent',
    { 'rs-change-color': color },
    [`rs-input-parent--state-${state}`],
    { 'rs-input-parent--border': border },
    { 'rs-input-parent--shadow': shadow },
    { 'rs-input-content--has-label': label || labelPlaceholder }
  );

  const inputContentClasses = classnames(
    'rs-input-content',
    { 'rs-input-content--has-color': color },
    { 'rs-input-content--has-label': label || labelPlaceholder }
  );

  const inputClasses = classnames(
    'rs-input',
    { 'rs-input--has-icon': icon },
    { 'rs-input--has-icon--after': iconAfter }
  );

  const placeholderClasses = classnames('rs-input__label', {
    'rs-input__label--hidden': value !== '' || props.value !== ''
  });

  const labelClasses = classnames(
    'rs-input__label',
    { 'rs-input__label--placeholder': labelPlaceholder },
    {
      'rs-input__label--hidden':
        value !== '' ||
        (props.value && props.value !== '') ||
        type === 'date' ||
        type === 'time'
    },
    { 'rs-input__label--label': label }
  );

  const iconClasses = classnames(
    'rs-input__icon',
    { 'rs-input__icon--after': iconAfter },
    { 'rs-input__icon--click': iconClick }
  );

  const progressClasses = classnames(
    'rs-input__progress',
    { 'rs-input__progress--danger': progress < 33 },
    { 'rs-input__progress--warn': progress < 66 && progress > 33 },
    { 'rs-input__progress--success': progress > 66 }
  );

  const messageClasses = classnames('rs-input__message', [
    `rs-input__message--${messageType}`
  ]);
  return (
    <div
      className={parentClasses}
      style={
        {
          '--rs-color': setComponentColor(color || '')
        } as React.CSSProperties
      }
    >
      <div className={inputContentClasses}>
        <input
          className={inputClasses}
          onChange={e => {
            setValue(e.target.value);
            onChange(e);
          }}
          type={type}
          value={value}
          {...rest}
        />
        {label ? (
          <label className={placeholderClasses}>{placeholder}</label>
        ) : null}
        <label className={labelClasses}>
          {label || placeholder || labelPlaceholder}
        </label>
        {icon ? (
          <span className={iconClasses} onClick={iconClick}>
            {icon}
          </span>
        ) : null}
        {loading ? <div className='rs-input__loading' /> : null}
        <div className='rs-input__affects'>
          <div className='rs-input__affects__1'></div>
          <div className='rs-input__affects__2'></div>
          <div className='rs-input__affects__3'></div>
          <div className='rs-input__affects__4'></div>
        </div>
      </div>
      {progress > 0 ? (
        <div className={progressClasses}>
          <div
            className='rs-input__progress__bar'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      ) : null}
      <div>
        {messageType ? <div className={messageClasses}> {message}</div> : null}
      </div>
    </div>
  );
};

export default RsInput;
