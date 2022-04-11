import Card from '../common/classes/Card';

export function getCreatureCard() {
  const card: Card = new Card(1);

  card.name = 'Spectacle Mage';
  card.setCode = 'STX';
  card.power = 2;
  card.toughness = 2;
  card.manaNeutral = 1;
  card.manaBlue = 1;
  card.manaRed = 1;
  card.abilities = ['flying'];
  card.description = 'Instant and sorcery spells you cast with mana value 5 or greater cost {1} less to cast.';
  card.approved = false;
  card.commentary = '"It would be a crime to withhold my light from the world"';
  card.type = 'creature';
  card.tags = ['bird', 'shaman'];
  return card;
}

export const getInstantCard = () => {
  const card: Card = new Card(1);

  card.name = 'Heated Debate';

  return card;
};
