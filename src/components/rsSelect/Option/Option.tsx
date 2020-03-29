import React from 'react';
import classnames from 'classnames';
import RsCheckbox from '../../rsCheckbox/Base/RsCheckbox';

import './Option.styles.scss';

const RsSelectOption = ({ ...props }) => {
  const {
    isActive,
    isHover,
    isMultiple,
    hiddenOption,
    children,
    onClick,
    disabled,
    checkboxColor
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
      className={optionButtonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {isMultiple ? (
        <RsCheckbox color={checkboxColor} checked={isActive}>
          {children}
        </RsCheckbox>
      ) : null}
      {!isMultiple ? children : null}
    </button>
  );
};

export default RsSelectOption;
