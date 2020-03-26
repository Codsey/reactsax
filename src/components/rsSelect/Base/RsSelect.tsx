import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import RsIconArrow from '../../../icons/arrow';

import './RsSelect.styles.scss';
import ReactDOM from 'react-dom';
import { setCords } from '../../../util/index';

const RsSelect = ({ ...props }) => {
  const [activeOptions, setActiveOptions] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);

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
    value,
    textFilter,
    isColorDark,
    notData,
    children,
    messageType = 'success',
    message
  } = props;

  useEffect(() => {
    if (optionsRef.current && selectRef.current) {
      setCords(optionsRef.current, selectRef.current, true);
    }

    window.addEventListener('resize', handleResize);
  });

  const handleResize = () => {
    if (optionsRef.current && selectRef.current) {
      setCords(optionsRef.current, selectRef.current, false);
    }
  };

  const getValueLabel = () => {
    console.log('Value Label');
  };

  const handleWindowClick = (e: any) => {
    if (activeOptions) {
      e.preventDefault();
    }
    e.target.blur();
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
    { 'rs-select__label--hidden': value }
  );

  const selectPlaceholderClasses = classnames('rs-select__label', {
    'rs-select__label--hidden': value || textFilter
  });

  const selectOptionClasses = classnames('rs-select__options', {
    isColorDark: isColorDark
  });

  const selectMessageClasses = classnames('rs-select__message', [
    `rs-select__message--${messageType}`
  ]);

  console.log(activeOptions);
  return (
    <div className='rs-select-content'>
      <div className={selectContentClasses} ref={selectRef}>
        <input
          className={selectInputClasses}
          readOnly={!filter ? true : false}
          value={activeFilter ? textFilter : getValueLabel()}
          onFocus={() => {
            if (!activeOptions) setActiveOptions(true); // SHOW OPTIONS (CHILDREN)
            if (filter) {
              setActiveFilter(true);
            }
          }}
          onBlur={() => {
            setActiveOptions(false);
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

        <div>
          {activeOptions
            ? ReactDOM.createPortal(
                <div className={selectOptionClasses} ref={optionsRef}>
                  <div className='rs-select__option__content'>
                    {notData ? (
                      <div className='rs-select__options__content__not-data'>
                        {' '}
                        {notData || 'No data available'}
                      </div>
                    ) : null}
                    {children}
                  </div>
                </div>,
                document.body
              )
            : null}
        </div>
        {loading ? <div className='rs-select__loading' /> : null}
        <RsIconArrow />
      </div>
      {message ? <div className={selectMessageClasses}> {message} </div> : null}
    </div>
  );
};

export default RsSelect;
