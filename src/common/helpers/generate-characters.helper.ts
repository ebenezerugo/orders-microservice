export class GenerateCharacters {
  // Pin: 1234
  static pin(length: number): string {
    return Math.random()
      .toString()
      .slice(2, length + 2);
  }
}
