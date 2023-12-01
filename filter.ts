function filterMethod(array: any[], fn : (item : any) => boolean) {

    let newArray : any[] = [];

    let newArrayIndex = 0;

    for (let index = 0; index < array.length; index++) {

        if (fn(array[index])) {

            newArray[newArrayIndex] = array[index];

            newArrayIndex++;

        };
        
    };

    return newArray;
  
};
    
console.log(filterMethod([5, 9, 3], (x) => x > 4));