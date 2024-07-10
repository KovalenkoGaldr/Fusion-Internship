function flatArr(arr) {
    const resultArr = [];
    arr.forEach( el => {
       if (Array.isArray(el)){
        resultArr.push(...flatArr(el))
       } else {
        resultArr.push(el)
       }
    });

    return resultArr
}

const anyArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] 
const flatArray = flatArr(anyArr)

console.log(">>>>>>>", flatArray)




