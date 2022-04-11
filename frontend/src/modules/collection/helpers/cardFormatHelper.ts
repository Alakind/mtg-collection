import Card from '../../../common/classes/Card';

function getCardManaString(card: Card) {
  let manacost = '';

  manacost += `{${card.manaNeutral}}`;

  manacost += '{Bk}'.repeat(card.manaBlack);
  manacost += '{Bu}'.repeat(card.manaBlue);
  manacost += '{R}'.repeat(card.manaRed);
  manacost += '{G}'.repeat(card.manaGreen);
  manacost += '{W}'.repeat(card.manaWhite);

  return manacost;
}

function getCardManaIcons(card: Card) {
  const manacost = card.manaNeutral;

  return manacost;
}

function getCardTags(card: Card) {
  let tags = '';

  card.tags.forEach((tag) => {
    tags += `${tag} `;
  });

  return tags;
}

function getCardAbilities(card: Card) {
  let abilities = '';

  card.abilities.forEach((ability) => {
    abilities += `${ability} `;
  });

  return abilities;
}

const cardFormatHelper = {
  getCardManaString,
  getCardManaIcons,
  getCardTags,
  getCardAbilities,
};

export default cardFormatHelper;
