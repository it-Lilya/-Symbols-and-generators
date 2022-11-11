export default class Team {
  constructor() {
    this.participant = new Set();
  }

  add(personage) {
    this.participant.add(personage);
  }

  addAll(...personage) {
    personage.forEach((item) => this.participant.add(item));
  }

  toArray() {
    return [...this.participant];
  }

  * [Symbol.iterator]() {
    for (const pers of this.participant) {
      yield pers;
    }
  }
}
