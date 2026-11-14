const values = {
  digit: "0123456789",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
  symbol: "!@#$%^&*()_+|}]{[:;?/>.<,`",
} as const;

type CharacterType = keyof typeof values;

class RayID {
  constructor(private type?: CharacterType) {}

  engine = (length: number): string => {
    let result = "";

    const characters = this.characters();
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  characters = (): string => {
    if (this.type && values[this.type] !== undefined) {
      return values[this.type];
    }

    return Object.values(values).join("");
  };

  gen = (length: number): string => {
    const generated = this.engine(length);

    if (generated[0] === "0") {
      return this.gen(length);
    }

    return generated;
  };
}

export default RayID;
