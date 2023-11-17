function pushMethod(array: any[], item: any) {

    array[ array.length ] = item
  
    return array;
  
};
    
console.log(pushMethod(["A", "B", "C"], "D"));