import React from 'react';
import classnames from 'classnames';
import './OptionGroup.styles.scss';

const OptionGroup = ({ ...props }) => {
  const { hiddenOptionGroup, title, children } = props;

  const optionGroupClasses = classnames('rs-select__option-group', {
    hiddenOptionGroup: hiddenOptionGroup
  });

  return (
    <div className={optionGroupClasses}>
      <h5>{title}</h5>
      {children}
    </div>
  );
};

export default OptionGroup;
