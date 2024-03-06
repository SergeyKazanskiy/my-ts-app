
export function moveUp<T>(arr: Array<any>, name: string): T[] {
    const fromIndex = arr
      .map(function (x) {
        return x.id;
      })
      .indexOf(name);
  
    const newArray = [...arr];
  
    if (fromIndex > 0) {
      const temp = newArray[fromIndex];
      newArray[fromIndex] = newArray[fromIndex - 1];
      newArray[fromIndex - 1] = temp;
    }
    return newArray;
  }
  
  export function moveDown<T>(arr: Array<any>, name: string): T[] {
    const fromIndex = arr
      .map(function (x) {
        return x.id;
      })
      .indexOf(name);
  
    const newArray = [...arr];
  
    if (fromIndex < arr.length - 1) {
      const temp = newArray[fromIndex];
      newArray[fromIndex] = newArray[fromIndex + 1];
      newArray[fromIndex + 1] = temp;
    }
    return newArray;
  }
  