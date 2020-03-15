import React from 'react';
import classnames from 'classnames';
import './RsAvatarGroup.styles.scss';

const RsAvatarGroup = ({ ...props }) => {
  const { max, float, children } = props;
  const avatarGroupClasses = classnames('rs-avatar__group', { float: float });
  return (
    <div className={avatarGroupClasses} data-max={max}>
      {children}
    </div>
  );
};

export default RsAvatarGroup;
