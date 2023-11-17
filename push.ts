function pushMethod(array: any[], item: any) {

    const newArray : any[] = [];

    for (let i = 0 ; i <= array.length ; i ++ ) {

      newArray[i] = array[i];

    };

    newArray[ array.length ] = item
  
  return newArray;
  
};
    
console.log(pushMethod(["A", "B", "C"], "D"));