const removeFromArray = function(arr, ...toRemove) {
  toRemove.forEach(num => {
    let x = arr.indexOf(num);
    if((x !== -1)){
      arr.splice(x, 1);
    }
  })
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
