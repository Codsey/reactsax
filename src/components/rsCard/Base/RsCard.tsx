import React from "react";

import classnames from "classnames";

import "./RsCard.styles.scss";

interface RsCardProps {
  type?: 1 | 2 | 3 | 4 | 5;
  image?: JSX.Element;
  text?: JSX.Element | string;
  title?: JSX.Element;
  interactions?: JSX.Element;
  buttons?: JSX.Element;
}

const RsCard = ({ ...props }: RsCardProps) => {
  const { type = 1, image, interactions, text, title, buttons } = props;
  const CardContentClasses = classnames("rs-card-content", `type-${type}`);

  return (
    <div className={CardContentClasses}>
      <div className="rs-card">
        {image ? (
          <div className="rs-card__img">
            {image}
            {interactions ? (
              <div className="rs-card__interactions">{interactions}</div>
            ) : null}
          </div>
        ) : null}
        {text ? (
          <div className="rs-card__text">
            {title ? <div className="rs-card__title">{title}</div> : null}
            {text}
          </div>
        ) : null}
        {buttons ? <div className="rs-card__buttons">{buttons}</div> : null}
      </div>
    </div>
  );
};

export default RsCard;
