function concatMethod(...arrays: any[]) {

    let arraysLengthIndex = 0;
    
    let totalLength = 0;
    
    while (arrays.length - 1 >= arraysLengthIndex) {
        
        totalLength += arrays[arraysLengthIndex].length;
        
        arraysLengthIndex++
        
    };
    
    let mergedArray : any[] = [];

    let mergedArrayIndex = 0;

    let currectArraysIndex = 0;

    let currectArraysIterationIndex = 0;

    while (totalLength - 1 >= mergedArrayIndex) {

        mergedArray[mergedArrayIndex] = arrays[currectArraysIndex][currectArraysIterationIndex];

        currectArraysIterationIndex ++;

        mergedArrayIndex ++;

        if (currectArraysIterationIndex === arrays[currectArraysIndex].length) {

            currectArraysIndex++;

            currectArraysIterationIndex = 0;

        };
        
    };

    return mergedArray;

};
    
console.log(concatMethod(["A", "B", "C"], ["D", "E", "F"], ["G", "H"]));