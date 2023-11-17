function unshiftMethod(array: any[], item: any) {

  const newArray = [item];

    for (let i = 1 ; i <= array.length ; i++) {

      newArray[i] = array[i - 1];

    };
  
  return newArray;

};
  
console.log(unshiftMethod(["B", "C", "D"], "A"));