export default class Card {
  id: number;

  name = '';

  setCode = '';

  type = '';

  tags = [''];

  abilities = [''];

  power = 0;

  toughness = 0;

  manaNeutral = 0;

  manaWhite = 0;

  manaBlack = 0;

  manaGreen = 0;

  manaBlue = 0;

  manaRed = 0;

  description = '';

  approved = false;

  commentary = '';

  constructor(
    id: number,
  ) {
    this.id = id;
  }
}
