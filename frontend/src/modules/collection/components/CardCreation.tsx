import React, { useCallback, useState } from 'react';
import Card from '../../../common/classes/Card';
import collectionApi from '../service/cardsApi';
import '../styles/card-creation.css';
import CardMedium from './CardMedium';

function CardCreation() {
  const [card, setCard] = useState(new Card(-1));

  const onChangeName = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, name: event.target.value }));
  }, []);

  const onChangeManaNeutral = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, manaNeutral: Number(event.target.value) }));
  }, []);

  const onChangeManaWhite = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, manaWhite: Number(event.target.value) }));
  }, []);

  const onChangeManaBlack = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, manaBlack: Number(event.target.value) }));
  }, []);

  const onChangeManaRed = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, manaRed: Number(event.target.value) }));
  }, []);

  const onChangeManaGreen = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, manaGreen: Number(event.target.value) }));
  }, []);

  const onChangeManaBlue = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, manaBlue: Number(event.target.value) }));
  }, []);

  const onChangeType = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, type: event.target.value }));
  }, []);

  const onChangePower = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, power: Number(event.target.value) }));
  }, []);

  const onChangeToughness = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, toughness: Number(event.target.value) }));
  }, []);

  const onChangeDescription = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, description: event.target.value }));
  }, []);

  const onChangeSetCode = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, setCode: event.target.value }));
  }, []);

  const onChangeCommentary = useCallback((event) => {
    setCard((oldCard) => ({ ...oldCard, commentary: event.target.value }));
  }, []);

  const onSubmit = useCallback(() => {
    // console.log(card);
    collectionApi.addCard(card).then().catch();
  }, []);

  return (
    <div className="card-creation">
      <div className="inputs">
        <div>
          Card name:
          <input type="text" className="text-input" onChange={onChangeName} value={card.name} />
        </div>
        <div>
          Mana neutral:
          <input onChange={onChangeManaNeutral} className="number-input" type="number" min="0" max="10" step="1" value={card.manaNeutral} />
        </div>
        <div>
          Mana white:
          <input onChange={onChangeManaWhite} className="number-input" type="number" min="0" max="10" step="1" value={card.manaWhite} />
        </div>
        <div>
          Mana black:
          <input onChange={onChangeManaBlack} className="number-input" type="number" min="0" max="10" step="1" value={card.manaBlack} />
        </div>
        <div>
          Mana red:
          <input onChange={onChangeManaRed} className="number-input" type="number" min="0" max="10" step="1" value={card.manaRed} />
        </div>
        <div>
          Mana blue:
          <input onChange={onChangeManaBlue} className="number-input" type="number" min="0" max="10" step="1" value={card.manaBlue} />
        </div>
        <div>
          Mana green:
          <input onChange={onChangeManaGreen} className="number-input" type="number" min="0" max="10" step="1" value={card.manaGreen} />
        </div>
        <div>
          Type:
          <select className="number-input" onChange={onChangeType}>
            <option value="creature">Creature</option>
            <option value="instant">Instant</option>
            <option value="sorcery">Sorcery</option>
            <option value="artefact">Artefact</option>
          </select>
        </div>
        <div>
          Power:
          <input onChange={onChangePower} className="number-input" type="number" min="0" max="10" step="1" value={card.power} />
        </div>
        <div>
          Toughness:
          <input onChange={onChangeToughness} className="number-input" type="number" min="0" max="100" step="1" value={card.toughness} />
        </div>
        <div className="textarea-label">
          <div>
            Description:
          </div>
          <textarea className="textarea-input" onChange={onChangeDescription} value={card.description} />
        </div>
        <div>
          Set code:
          <input type="text" className="text-input set-code" onChange={onChangeSetCode} value={card.setCode} />
        </div>
        <div className="textarea-label">
          <div>
            Commentary:
          </div>
          <textarea className="textarea-input" onChange={onChangeCommentary} value={card.commentary} />
        </div>
        <div className="textarea-label">
          <button onClick={onSubmit} className="button-create" type="submit">Create card</button>
        </div>
      </div>
      <div className="card-demo">
        <CardMedium card={card} />
      </div>
    </div>
  );
}

export default React.memo(CardCreation);
