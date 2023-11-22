function shiftMethod(array: any[]) {

    for (let index = 0; index < array.length; index++) {

        array[index] = array[index + 1]
        
    };

    array.length --;

    return array;
  
};
    
console.log(shiftMethod(["A", "B", "C", "D"]));