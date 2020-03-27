import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import RsIconArrow from '../../../icons/arrow';
import Option from '../Option/Option';

import './RsSelect.styles.scss';
import ReactDOM from 'react-dom';
import { setCords, setComponentColor } from '../../../util/index';

interface SelectOption {
  value: string | number;
  label: string | number;
  disabled?: boolean;
}

const RsSelect = ({ ...props }) => {
  const [activeOptions, setActiveOptions] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);

  const [selectedOption, setSelectedOption] = useState<string | number>();

  const optionsRef: React.RefObject<any> = React.createRef();
  const selectRef: React.RefObject<any> = React.createRef();

  const {
    state,
    disabled,
    loading,
    multiple,
    filter,
    labelPlaceholder,
    label,
    placeholder,
    // value,
    textFilter,
    isColorDark,
    notData,
    // children,
    messageType = 'success',
    message,
    options = [],
    color
  } = props;

  useEffect(() => {
    const handleResize = () => {
      if (optionsRef.current && selectRef.current) {
        setCords(optionsRef.current, selectRef.current, false);
      }
    };

    if (optionsRef.current && selectRef.current) {
      optionsRef.current.classList.add(
        'rs-select-enter',
        'rs-select-enter-active'
      );
      setCords(optionsRef.current, selectRef.current, true);
      setTimeout(() => {
        if (optionsRef.current) {
          optionsRef.current.classList.remove('rs-select-enter');
        }
      }, 150);
    }
    document.body.style.overflowY = 'scroll';
    window.addEventListener('resize', handleResize);
  }, [optionsRef, selectRef]);

  const handleWindowClick = (e: any) => {
    if (activeOptions) {
      e.preventDefault();
    }
    e.target.blur();
  };

  const getInputValue = () => {
    if (selectedOption) {
      return selectedOption;
    } else {
      return '';
    }
  };

  const selectContentClasses = classnames(
    'rs-select',
    [`rs-select--state-${state}`],
    { 'rs-select--dsiabled': disabled },
    { activeOptions: activeOptions },
    { loading: loading }
  );

  const selectInputClasses = classnames(
    'rs-select__input',
    { multiple: multiple },
    { simple: !multiple && !filter }
  );

  const selectLabelClasses = classnames(
    'rs-select__label',
    { 'rs-select__label--placeholder': labelPlaceholder },
    { 'rs-select__label--label': label },
    { 'rs-select__label--hidden': selectedOption }
  );

  const selectPlaceholderClasses = classnames('rs-select__label', {
    'rs-select__label--hidden': selectedOption || textFilter
  });

  const selectOptionClasses = classnames(
    'rs-select-enter',
    'rs-select__options',
    {
      isColorDark: isColorDark
    }
  );

  const selectMessageClasses = classnames('rs-select__message', [
    `rs-select__message--${messageType}`
  ]);

  return (
    <div className='rs-select-content'>
      <div className={selectContentClasses} ref={selectRef}>
        <input
          className={selectInputClasses}
          readOnly={!filter ? true : false}
          value={activeFilter ? textFilter : getInputValue()}
          onFocus={() => {
            if (!activeOptions) {
              setActiveOptions(true);
            }
            if (filter) {
              setActiveFilter(true);
            }
          }}
          onBlur={() => {
            optionsRef.current.classList.add(
              'rs-select-leave-active',
              'rs-select-leave-to'
            );
            setTimeout(() => {
              setActiveOptions(false);
            }, 100);
          }}
          onMouseDown={e => {
            handleWindowClick(e);
          }}
        />
        {!multiple || label ? (
          <label className={selectLabelClasses}>
            {labelPlaceholder || label}
          </label>
        ) : null}

        {!multiple && !labelPlaceholder ? (
          <label className={selectPlaceholderClasses}>{placeholder}</label>
        ) : null}

        {/** MULTIPLE HERE DO IT LATER */}
        {multiple ? <button className='rs-select__chips'></button> : null}
        {activeOptions ? (
          ReactDOM.createPortal(
            <div
              className={selectOptionClasses}
              ref={optionsRef}
              style={
                {
                  '--rs-color': setComponentColor(color || 'primary')
                } as React.CSSProperties
              }
            >
              <div className='rs-select__options__content'>
                {notData ? (
                  <div className='rs-select__options__content__not-data'>
                    {notData || 'No data available'}
                  </div>
                ) : null}
                {options.map((option: SelectOption, index: number) => (
                  <Option
                    key={index}
                    onClick={() => setSelectedOption(option.label)}
                    isActive={selectedOption === option.label}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </Option>
                ))}
              </div>
            </div>,
            document.body
          )
        ) : (
          <React.Fragment />
        )}
        {loading ? <div className='rs-select__loading' /> : null}
        <RsIconArrow />
      </div>
      {message ? <div className={selectMessageClasses}> {message} </div> : null}
    </div>
  );
};

export default RsSelect;
