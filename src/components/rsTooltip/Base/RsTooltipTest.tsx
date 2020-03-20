import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { setComponentColor, setTooltipCords } from '../../../util/index';
import './RsTooltip.styles.scss';
import ReactDOM from 'react-dom';

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
    color,
    notHover
  } = props;

  useEffect(() => {
    let position = 'top';
    if (bottom) {
      position = 'bottom';
    } else if (left) {
      position = 'left';
    } else if (right) {
      position = 'right';
    }
    if (tooltipRef.current) {
      tooltipRef.current.classList.add('rs-tooltip-enter');
      setTooltipCords(tooltipRef.current, tooltipContent.current, position);
      setTimeout(() => {
        if (tooltipRef.current) {
          tooltipRef.current.classList.remove('rs-tooltip-enter');
        }
      }, 30);
    }
  }, [tooltipRef, tooltipContent, bottom, left, right]);

  const handleMouseEnter = () => {
    setActiveTooltip(true);
  };

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.classList.add('rs-tooltip-leave-to');
    }
    setTimeout(() => {
      setActiveTooltip(false);
    }, 150);
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
      onMouseEnter={e => {
        if (!notHover) {
          handleMouseEnter();
        }
      }}
      onMouseLeave={() => handleMouseLeave()}
    >
      {activeTooltip ? (
        ReactDOM.createPortal(
          <div
            className={tooltipClasses}
            ref={tooltipRef}
            style={
              {
                '--rs-color': setComponentColor(color || '')
              } as React.CSSProperties
            }
          >
            {tooltip}
            {loading ? <div className='rs-tooltip__loading'></div> : null}
          </div>,
          document.body
        )
      ) : (
        <React.Fragment />
      )}
      {children}
    </div>
  );
};

export default RsTooltip;
