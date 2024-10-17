//1.  How to FLATTEN OBJECTS
const obj = {name: "stephen", age: 39, address:{physical:"Kasarani", building: "The Oak"}}

// work with this Object.keys(obj)
const newObj = {}

function objectFlattener(obj){
    Object.keys(obj).forEach(key=>{
        if(typeof obj[key] === "object"){
            objectFlattener(obj[key])
    
        }else{
            newObj[key] = obj[key]
    
        }
        }
    )
    
}
objectFlattener(obj)
console.log(newObj)


// 2. ARRAYS-METHOD ONE
// How to Flatten ARRAYS
const arrs = [1, 2, [3, [4, [5, [6,[6-0,[6.1],[6.2]]]]], 7], [9,10,11], 4]

// Iterate over it
// if item is not an Object, record it
// else, iterate over the object and find the keys that are not objects

const newArr = []
function arrayFlattener(arrs){
    arrs.forEach(arr =>{
        if(typeof arr === "object"){
            arrayFlattener(arr)
        }else{
            newArr.push(arr)
        }
    })
    return newArr
}

console.log(`FLATTENING WITH RECURSSIVE FUNCTIONS: ${arrayFlattener(arrs)}`)
// console.log(newArr)


// 3. ARRAYS-METHOD TWO
// use flat() and as an argument add the number of nestings within the array

const flattenedArray = arrs.flat(6)
console.log(`FLATTENING WITH FLAT() METHOD: ${flattenedArray}`)
