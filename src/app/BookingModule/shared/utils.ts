export namespace Utils {

  export function enumToArray(Enum: any): any[] {
    const enums: Array<string> = Object.keys(Enum);
    const arr = [];
    enums.forEach((x,i) => {
      return i > enums.length / 2 - 1 ? null : arr.push(Enum[x]);
    });
    return arr
  }
}


