export default class Card {
  id: number;

  name = '';

  setCode = '';

  types = [];

  manaNeutral = 0;

  manaWhite = 0;

  manaBlack = 0;

  manaGreen = 0;

  manaBlue = 0;

  manaRed = 0;

  description = '';

  approved = false;

  constructor(
    id: number,
  ) {
    this.id = id;
  }
}
