function everyMethod(array: any[], fn : (item : any) => boolean) {

    for (let index = 0; index < array.length; index++) {

        if(!fn(array[index])) return false
        
    };

    return true;
  
};
    
console.log(everyMethod([5, 9, 3], (x) => x > 4));