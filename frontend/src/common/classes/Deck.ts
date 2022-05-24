export default class Deck {
  id: number;

  name: string;

  description: string;

  isShared: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    isShared: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.isShared = isShared;
  }
}
