function someMethod(array: any[], fn : (item : any) => boolean) {

    for (let index = 0; index < array.length; index++) {

        if(fn(array[index])) return true
        
    };

    return false;
  
};
    
console.log(someMethod([5, 9, 3], (x) => x > 10));