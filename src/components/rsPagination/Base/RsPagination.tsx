import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import RsIconArrow from '../../../icons/arrow';
import './RsPagination.styles.scss';
import { setComponentColor } from '../../../util/index';

interface RsPaginationProps {
  buttonsDotted?: boolean;
  circle?: boolean;
  square?: boolean;
  disabled?: boolean;
  notMargin?: boolean;
  onlyArrows?: boolean;
  children?: any;
  notArrows?: boolean;
  arrowPrev?: any;
  arrowNext?: any;
  progress?: boolean;
  length: number;
  max: number;
  disabledItems?: number[];
  loadingItems?: number[];
  dottedNumber?: number;
  infinite?: boolean;
  color?: string;
}

const RsPagination = ({ ...props }: RsPaginationProps) => {
  const [value, setValue] = useState(1);
  const [leftActive, setLeftActive] = useState(42);
  const [activeClassMove, setActiveClassMove] = useState(false);

  //Button Refs Object
  const buttonRefs: React.RefObject<any> = React.useRef({});

  const paginationRef: React.RefObject<any> = React.createRef();

  const {
    buttonsDotted,
    circle,
    square,
    disabled,
    notMargin,
    onlyArrows,
    children,
    notArrows,
    arrowPrev,
    arrowNext,
    progress,
    length,
    max = 9,
    disabledItems = [],
    loadingItems = [],
    dottedNumber = 5,
    infinite,
    color
  } = props;

  useEffect(() => {
    handleValue(value, value + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleValue = (val: number, prevValue: number) => {
    if (isDisabledItem(val) || isLoadingItem(val)) {
      let newVal = val;
      if (val > prevValue) {
        newVal += 1;
      } else {
        newVal -= 1;
      }

      if (newVal > length) {
        newVal = infinite ? 1 : prevValue;
      } else if (newVal <= 0) {
        newVal = infinite ? length : prevValue;
      }
      val = newVal;
      setValue(newVal);
    } else {
      if (paginationRef.current) {
        setActiveClassMove(true);
        const offsetLeftPagination = paginationRef.current.offsetLeft;

        setLeftActive(
          buttonRefs.current[`btn${value}`].offsetLeft + offsetLeftPagination
        );
        setTimeout(() => {
          setActiveClassMove(false);
        }, 300);
      }
    }
  };

  const getProgress = () => {
    let percent = 0;

    percent = (value * 100) / length;

    return percent;
  };

  const isMobile = () => {
    let isMobile = false;

    if (window.innerWidth < 600) {
      isMobile = true;
    }
    return isMobile;
  };

  const isDisabledItem = (item: number) => {
    return disabledItems.indexOf(item) !== -1;
  };

  const isLoadingItem = (item: number) => {
    return loadingItems.indexOf(item) !== -1;
  };

  const renderDotted = (text: string = '...', index?: number) => {
    const dottedClasses = classnames('rs-pagination__dotted', {
      next: value === length ? false : text === '...>'
    });

    return (
      <div
        className={dottedClasses}
        key={index}
        onClick={() => {
          let newVal = (value === length
          ? false
          : text === '...>')
            ? value + dottedNumber
            : value - dottedNumber;
          if (newVal > length) {
            newVal = length;
          } else if (newVal < 1) {
            newVal = 1;
          }
          setValue(newVal);
        }}
      >
        <span className='dotted'>...</span>
        <span className='con-arrows'>
          <RsIconArrow />
          <RsIconArrow />
        </span>
      </div>
    );
  };

  const renderButton = (NumberPage: number = 1, index: number) => {
    const buttonClasses = classnames(
      'rs-pagination__button',
      { active: NumberPage === value },
      { prevActive: NumberPage === value - 1 },
      { nextActive: NumberPage === value + 1 },
      { disabled: isDisabledItem(NumberPage) },
      { loading: isLoadingItem(NumberPage) }
    );
    return (
      <button
        ref={el => (buttonRefs.current[`btn${NumberPage}`] = el)}
        className={buttonClasses}
        onClick={() => setValue(NumberPage)}
        key={index}
      >
        {buttonsDotted ? '' : `${NumberPage}`}
      </button>
    );
  };

  const renderButtons = (array: any) => {
    const buttons: any[] = [];
    array.forEach((item: any, index: number) => {
      if (item === '...>' || item === '<...') {
        buttons.push(renderDotted(item, index));
      } else {
        buttons.push(renderButton(item, index));
      }
    });
    return buttons;
  };

  const getButtons = (start: number = 1, end: number = 6) => {
    const buttons = [];
    for (start > 0 ? start : 1; start <= end; start++) {
      buttons.push(start);
    }
    return buttons;
  };

  const getPages = () => {
    const pagLength = Number(length);
    const pagMax = isMobile() ? 5 : max;
    const even = pagMax % 2 === 0 ? 1 : 0;
    const prevRange = Math.floor(pagMax / 2);
    const nextRange = length - prevRange + 1 + even;

    if (value >= prevRange && value <= nextRange && !buttonsDotted) {
      const start = value - prevRange + 2;
      const end = value + prevRange - 2 - even;
      return renderButtons([
        1,
        '<...',
        ...getButtons(start, end),
        '...>',
        length
      ]);
    } else if (!buttonsDotted && length > 6) {
      return renderButtons([
        ...getButtons(1, prevRange),
        '...>',
        ...getButtons(nextRange, pagLength)
      ]);
    } else if (buttonsDotted || length <= 6) {
      return renderButtons([...getButtons(1, length)]);
    }
    return [];
  };

  const paginationContentClasses = classnames(
    'rs-pagination-content',
    { buttonsDotted: buttonsDotted },
    { circle: circle },
    { square: square },
    { disabled: disabled },
    { notMargin: notMargin },
    { 'rs-change-color': color }
  );

  const paginationActiveClasses = classnames('rs-pagination__active', {
    move: activeClassMove
  });
  return (
    <div
      style={
        {
          '--rs-color': setComponentColor(color || 'primary')
        } as React.CSSProperties
      }
      className={paginationContentClasses}
    >
      {!onlyArrows && !children ? (
        <div
          className={paginationActiveClasses}
          style={{ left: `${leftActive}px` }}
        >
          {buttonsDotted ? '' : value}
        </div>
      ) : null}
      {!notArrows ? (
        <button
          className='rs-pagination__arrow prev'
          disabled={infinite ? false : value <= 1}
          onClick={() => {
            const newVal = value - 1;
            if (newVal > 0) {
              setValue(newVal);
            } else if (infinite) {
              setValue(length);
            }
          }}
        >
          {arrowPrev ? arrowPrev : <RsIconArrow />}
        </button>
      ) : null}
      {children ? (
        <div className='rs-pagination__slot'> {children} </div>
      ) : null}
      {!onlyArrows && !children ? (
        <div ref={paginationRef} className='rs-pagination'>
          {getPages().map(page => page)}
        </div>
      ) : null}
      {!notArrows ? (
        <button
          className='rs-pagination__arrow next'
          disabled={infinite ? false : value >= length}
          onClick={() => {
            const newVal = value + 1;
            if (newVal <= length) {
              setValue(newVal);
            } else if (infinite) {
              setValue(1);
            }
          }}
        >
          {arrowNext ? arrowNext : <RsIconArrow />}
        </button>
      ) : null}
      {progress ? (
        <div className='rs-pagination__progress'>
          <div
            className='progress'
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default RsPagination;
