import React from 'react';
import Card from '../../../common/classes/Card';
import cardFormatHelper from '../helpers/cardFormatHelper';
import '../styles/cards.css';

export interface CardMediumProps {
    card: Card
}

function CardMedium({
  card,
}: CardMediumProps) {
  return (
    <div className="card-medium">
      <div className="label-medium">
        <div className="name-medium">
          {card.name}
        </div>
        <div className="manacost-medium">{cardFormatHelper.getCardManaString(card)}</div>
      </div>
      <div className="filler-medium" />
      <div className="bottom-container-medium">
        <div className="label-type-medium">
          <div className="type-medium">{`${card.type} - ${cardFormatHelper.getCardTags(card)}` }</div>
        </div>
        <div className="label-description-medium">{cardFormatHelper.getCardAbilities(card)}</div>
        <div className="label-description-medium">{card.description}</div>
        <div className="bottom-bar-medium">
          <div className="set-medium">{card.setCode}</div>
          <button className="edit-button-medium" type="button">e</button>
          <div className="power-toughness-medium">{`${card.power}/${card.toughness}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CardMedium;
