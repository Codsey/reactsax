import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { setCordsPosition, setComponentColor } from '../../../util/index';
import './RsTooltip.styles.scss';

const RsTooltip = ({ ...props }) => {
  const [activeTooltip, setActiveTooltip] = useState(false);

  const tooltipRef: React.RefObject<any> = React.createRef();
  const tooltipContent: React.RefObject<any> = React.createRef();

  const {
    tooltip,
    children,
    bottom,
    left,
    right,
    shadow,
    notArrow,
    square,
    circle,
    border,
    borderThick,
    loading,
    color
  } = props;

  useEffect(() => {
    const handleResize = () => {
      let position = 'top';
      if (bottom) {
        position = 'bottom';
      } else if (left) {
        position = 'left';
      } else if (right) {
        position = 'right';
      }
      const tooltip = tooltipRef.current;
      if (!tooltip) {
        return;
      }
      setCordsPosition(tooltip, tooltipContent.current, position);
    };

    window.addEventListener('resize', handleResize);
    let position = 'top';
    if (bottom) {
      position = 'bottom';
    } else if (left) {
      position = 'left';
    } else if (right) {
      position = 'right';
    }
    if (tooltipRef.current) {
      const parent = document.body;
      setCordsPosition(tooltipRef.current, tooltipContent.current, position);
      parent.insertBefore(tooltipRef.current, parent.lastChild);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [activeTooltip, tooltipRef, tooltipContent, bottom, left, right]);

  const handleMouseEnter = () => {
    setActiveTooltip(true);
  };

  const handleMouseLeave = () => {
    const parent = tooltipContent.current;
    if (parent && tooltipRef.current) {
      tooltipRef.current.classList.add('rs-tooltip-leave-to');
      setTimeout(() => {
        parent.insertBefore(tooltipRef.current, parent.lastChild);
        setActiveTooltip(false);
      }, 100);
    }
  };

  const tooltipClasses = classnames(
    'rs-tooltip',
    { top: !bottom && !left && !right },
    { bottom: bottom },
    { left: left },
    { right: right },
    { shadow: shadow },
    { notArrow: notArrow },
    { square: square },
    { circle: circle },
    { border: border },
    { borderThick: borderThick },
    { loading: loading }
  );
  return (
    <div
      className='rs-tooltip-content'
      ref={tooltipContent}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <CSSTransition
        timeout={100}
        in={activeTooltip}
        // unmountOnExit
        // mountOnEnter
        classNames={{
          enter: 'rs-tooltip-enter',
          enterActive: 'rs-tooltip-enter-active',
          exit: 'rs-tooltip-leave-to',
          exitActive: 'rs-tooltip-leave-active'
        }}
      >
        {activeTooltip ? (
          <div
            className={tooltipClasses}
            ref={tooltipRef}
            style={
              {
                '--rs-color': setComponentColor(color || '')
              } as React.CSSProperties
            }
            // onMouseEnter={() => handleMouseEnter()}
            // onMouseLeave={() => handleMouseLeave()}
          >
            {tooltip}
            {loading ? <div className='rs-tooltip__loading'></div> : null}
          </div>
        ) : (
          <React.Fragment />
        )}
      </CSSTransition>
      {children}
    </div>
  );
};

export default RsTooltip;
