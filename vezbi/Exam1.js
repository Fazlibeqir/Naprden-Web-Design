const dropUntil =(array,predicate) => {
    const result = [];

    let startAdding = false;
    for(let i=0; i< array.length; i++){
        if (predicate(array[i])) {
             startAdding = true;
         }
         if (startAdding) {
             result.push(array[i]);
         }
     
    }
    return result;
 };