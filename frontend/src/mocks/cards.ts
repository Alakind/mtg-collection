import Card from '../common/classes/Card';

export function getCreatureCard1() {
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

export function getCreatureCard2() {
  const card: Card = new Card(2);

  card.name = 'Frost Trickster';
  card.setCode = 'STX';
  card.power = 2;
  card.toughness = 2;
  card.manaNeutral = 2;
  card.manaBlue = 1;
  card.abilities = ['flying'];
  card.description = 'When Frost Trickster enters the battlefield, tap target creature an opponent controls. That creature doesn\'t untap during its controller\'s nest untap step.';
  card.approved = false;
  card.commentary = 'The most important skill in a Mage Tower match is keeping one\'s cool.';
  card.type = 'creature';
  card.tags = ['bird', 'wizard'];

  return card;
}

export const getInstantCard1 = () => {
  const card: Card = new Card(3);

  card.name = 'Heated Debate';
  card.setCode = 'STX';
  card.manaNeutral = 2;
  card.manaRed = 1;
  card.description = 'This spell can\'t be countered.\n Heated debate deals 4 damage to target creature or planeswalker.';
  card.approved = false;
  card.commentary = '"While you were wasting time with abstract equations, I mastered ancient Oggyar fire magic. Your move."';
  card.type = 'instant';

  return card;
};
