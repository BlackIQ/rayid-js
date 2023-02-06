const values = {
  digit: "0123456789",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
};

class RayID {
  constructor(type) {
    this.type = type;
  }

  engine = (length) => {
    let result = "";

    const characters = this.characters();
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  characters = () => {
    if (values[this.type] !== undefined) return values[this.type];
    else {
      let chars = "";

      Object.values(values).map((value) => (chars += value));

      return chars;
    }
  };

  gen = (length) => {
    const generated = this.engine(length);

    if (generated[0] === "0") {
      return this.gen(length);
    } else {
      return generated;
    }
  };
}

export default RayID;
