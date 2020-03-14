import React from 'react';
import classnames from 'classnames';
import './RsOption.styles.scss';
import RsCheckbox from '../../rsCheckbox/Base/RsCheckbox';

const RsOption = ({ ...props }) => {
  const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

  const {
    isActive,
    isHover,
    isMultiple,
    hiddenOption,
    children,
    disabled
  } = props;
  const optionButtonClasses = classnames(
    'rs-select__option',
    { activeOption: isActive },
    { isHover: isHover },
    { isMultiple: isMultiple },
    { hiddenOption: hiddenOption }
  );
  return (
    <button
      ref={buttonRef}
      className={optionButtonClasses}
      disabled={disabled}
      onClick={() => console.log(buttonRef.current)}
    >
      {isMultiple ? (
        <RsCheckbox checked={isActive}> {children} </RsCheckbox>
      ) : null}
      {!isMultiple ? children : null}
    </button>
  );
};

export default RsOption;
