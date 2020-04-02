import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import RsIconArrow from '../../../icons/arrow';
import Option from '../Option/Option';
import GroupOption from '../OptionGroup/OptionGroup';

import './RsSelect.styles.scss';
import ReactDOM from 'react-dom';
import { setCords, setComponentColor, generateID } from '../../../util/index';
import RsIconClose from '../../../icons/close';

interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface SelectGroupOption {
  title: string;
  options: SelectOption[];
}

interface RsSelectProps {
  state?: string;
  disabled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  filter?: boolean;
  labelPlaceholder?: string;
  label?: string;
  placeholder?: string;
  isColorDark?: boolean;
  notData?: boolean | string;
  messageType?: string; // TODO: FIX THIS TO SPECIFIC VALUES
  message?: string;
  // options?: SelectOption[];
  // groupOptions?: SelectGroupOption[];
  color?: string;
  collapseChips?: boolean;
  [x: string]: any;
}

const RsSelect = ({ ...props }: RsSelectProps) => {
  const [activeOptions, setActiveOptions] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [targetClose, setTargetClose] = useState(false);
  const [textFilter, setTextFilter] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const [selectedOptionsMultiple, setSelectedOptionsMultiple] = useState<any[]>(
    []
  );

  const [inputHeight, setInputHeight] = useState(0);

  const optionsRef: React.RefObject<any> = React.createRef();
  const selectRef: React.RefObject<any> = React.createRef();
  const chipRef: React.MutableRefObject<any> = React.createRef();
  const multipleInputRef: React.RefObject<any> = React.createRef();

  const id = React.useRef(generateID());

  const {
    state,
    disabled,
    loading,
    multiple,
    filter,
    labelPlaceholder,
    label,
    placeholder,
    isColorDark,
    notData,
    messageType = 'success',
    message,
    options = [],
    groupOptions = [],
    color,
    collapseChips
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

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOptions]);

  const handleWindowClick = (e: any) => {
    if (activeOptions) {
      e.preventDefault();
    }
    e.target.blur();
  };

  const getHeight = () => {
    if (inputHeight) {
      return `${inputHeight}px`;
    }
    return undefined;
  };

  const getInputValue = () => {
    if (selectedOption) {
      return selectedOption;
    } else {
      return '';
    }
  };

  const clickOption = (label: string | number) => {
    if (multiple) {
      const current = [...selectedOptionsMultiple];
      if (current.indexOf(label) === -1) {
        current.push(label);
      } else {
        current.splice(current.indexOf(label), 1);
      }
      setSelectedOptionsMultiple(current);
    } else {
      setSelectedOption(label);
    }
  };

  const getChips = () => {
    const chip = (item: any, isCollapse: boolean, key: number) => {
      return (
        <span className={selectChipsClasses} key={key}>
          {item}
          {!isCollapse ? (
            <span
              className='rs-select__chips__chip__close'
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  setTargetClose(false);
                }, 100);
                if (!activeOptions) {
                  chipRef.current.blur();
                }
                clickOption(item);
              }}
              onMouseLeave={() => setTargetClose(false)}
              onMouseEnter={() => setTargetClose(true)}
            >
              <RsIconClose hover='less' />
            </span>
          ) : null}
        </span>
      );
    };

    let chips: any[] = [];
    if (selectedOptionsMultiple.length > 0) {
      selectedOptionsMultiple.map((item: any, index: number) => {
        return chips.push(chip(item, false, index));
      });
    }

    if (collapseChips) {
      chips = [
        chips[0],
        chips.length > 1 &&
          chip(
            { label: `+${chips.length - 1}`, value: null },
            true,
            chips.length - 1
          )
      ];
    }

    return chips;
  };

  const handleOptionsFilter = (): SelectOption[] | [] => {
    if (multiple) {
      const filteredValue = groupOptions.map((group: SelectGroupOption) =>
        group.options.filter((option: SelectOption) =>
          option.label.includes(textFilter)
        )
      );

      return [].concat.apply([], filteredValue);
    } else {
      return options.filter((option: SelectOption) =>
        option.label.includes(textFilter)
      );
    }
  };

  const isHidden = (label: string) => {
    const isExist = handleOptionsFilter().filter((option: SelectOption) => {
      return option.label.toLowerCase() === label.toLowerCase();
    });

    if (isExist.length < 1) return true;
  };

  const isGroupHidden = (title: string) => {
    const availableValues: any = handleOptionsFilter();

    const group = groupOptions.filter((option: SelectGroupOption) => {
      return option.title === title;
    });

    const haveChilds = group[0].options.filter((option: SelectOption) => {
      if (availableValues.includes(option)) return true;
      return null;
    });

    if (haveChilds.length < 1) return true;
  };

  const getOptions = () => {
    if (options.length > 0) {
      return options.map((option: SelectOption, index: number) => (
        <Option
          key={index}
          isMultiple={multiple}
          isHover={multiple}
          onClick={() => {
            clickOption(option.label);
          }}
          isActive={
            multiple
              ? selectedOptionsMultiple.includes(option.label)
              : selectedOption === option.label
          }
          disabled={option.disabled}
          cckboxColor={color}
          hiddenOption={isHidden(option.label)}
        >
          {option.label}
        </Option>
      ));
    } else if (groupOptions.length > 0) {
      return groupOptions.map((option: SelectGroupOption, index: number) => (
        <GroupOption
          title={option.title}
          key={index}
          hiddenOptionGroup={isGroupHidden(option.title)}
        >
          {option.options.map((option: SelectOption, index: number) => (
            <Option
              key={index}
              isMultiple={multiple}
              onClick={() => {
                clickOption(option.label);
              }}
              isActive={
                multiple
                  ? selectedOptionsMultiple.includes(option.label)
                  : selectedOption === option.label
              }
              disabled={option.disabled}
              checkboxColor={color}
              hiddenOption={isHidden(option.label)}
            >
              {option.label}
            </Option>
          ))}
        </GroupOption>
      ));
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
    {
      'rs-select__label--hidden':
        selectedOption || selectedOptionsMultiple.length > 0 || textFilter
    }
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

  const selectChipsClasses = classnames('rs-select__chips__chip', {
    isCollapse: collapseChips
  });

  const selectMessageClasses = classnames('rs-select__message', [
    `rs-select__message--${messageType}`
  ]);
  return (
    <div className='rs-select-content'>
      <div className={selectContentClasses} ref={selectRef}>
        <input
          className={selectInputClasses}
          id={!multiple ? id.current : undefined}
          style={{ height: getHeight() }}
          readOnly={!filter ? true : false}
          value={activeFilter ? textFilter : getInputValue()}
          onChange={e => setTextFilter(e.target.value)}
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
        {!multiple || label || labelPlaceholder ? (
          <label htmlFor={id.current} className={selectLabelClasses}>
            {labelPlaceholder || label}
          </label>
        ) : null}

        {!multiple && !labelPlaceholder ? (
          <label htmlFor={id.current} className={selectPlaceholderClasses}>
            {placeholder}
          </label>
        ) : null}

        {/** MULTIPLE HERE DO IT LATER */}
        {multiple ? (
          <button
            className='rs-select__chips'
            ref={e => {
              if (e?.scrollHeight) setInputHeight(e?.scrollHeight);
              chipRef.current = e;
            }}
            onFocus={() => {
              if (!targetClose) {
                setActiveOptions(true);
              }
              if (filter && multiple) {
                multipleInputRef.current.focus(); // FIX THIS.
              }
            }}
            onBlur={e => {
              if (!e.relatedTarget && activeOptions) {
                optionsRef.current.classList.add(
                  'rs-select-leave-active',
                  'rs-select-leave-to'
                );
                setTimeout(() => {
                  setActiveOptions(false);
                }, 100);
              } else if (activeOptions) {
                e.target.focus();
              }
            }}
          >
            {getChips().map(chip => chip)}
            {filter ? (
              <input
                id={id.current}
                className='rs-select__chips__input'
                ref={multipleInputRef}
                value={textFilter}
                onChange={e => setTextFilter(e.target.value)}
                onFocus={() => {
                  if (!targetClose) {
                    setActiveOptions(true);
                  }
                }}
              />
            ) : null}
          </button>
        ) : null}
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
                {getOptions()}
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
