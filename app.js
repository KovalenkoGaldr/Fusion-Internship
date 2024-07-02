const arr = new Array();


// arr.reduce(cb, init)


const multipleFn = (acc, item, index, array) => {
  const newValue = item * 2;
  const result = [...acc, newValue];
  return result;
}


// arr.reduce(cb, init)


const reduceFn = (arr, cb, init) => {
  let accum = init;
  for (let i = 0; i < arr.length; i++) {
    accum = cb(accum, arr[i], i, arr)
  }
  return accum;
}


const example = [3, 5, 7];


console.log('>>>>', reduceFn(example, multipleFn, []))


console.log('>>>>>>>>', example.reduce((acc, el) => {
  const newValue = el * 2;
  acc.push(newValue);
  return acc;
}, []))
