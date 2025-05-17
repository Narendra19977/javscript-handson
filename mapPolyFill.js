// Left side of below function is to add myMap custom Method as prototype of Array class
Array.prototype.myMap=function(callback){
   let tempArray=[] // declared and initialize temArray with empty 
    for(let i=0;i<this.length;i++){
        tempArray.push(callback(this[i],i,this))
        /* Above line push the callback which contain every single element ,
         index of each element and entire array*/
    }
    return tempArray
}

// Let's test 
const testingArray=[12,14,15,16]
testingArray.myMap((myItem,index,myArray)=>console.log(myItem,index,myArray))