function memoize(callback){
    const cache={};
    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]!==undefined){
            console.log("data is being returned from cache")
            return cache[key];
        }
        const result = callback(...args);
        console.log("doing heavy calcualtion and storing into the cache")
        cache[key]=result;
        return result;
    }
}

// For example 

function addTwoNumber(firstNumber,secondNumber){
    return firstNumber+secondNumber
}
const memoizedAddTwoNumber=memoize(addTwoNumber)
console.log(addTwoNumber(12,14))
console.log(addTwoNumber(12,14))

console.log(memoizedAddTwoNumber(12,14))
console.log(memoizedAddTwoNumber(12,14))
console.log(memoizedAddTwoNumber(12,14))
console.log(memoizedAddTwoNumber(12,14))