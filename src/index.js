module.exports = function check(str, bracketsConfig) {
  // your solution
  let newArray = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    newArray.push(bracketsConfig[i].join(''));
  }

  for (let j = 0; j < newArray.length; j++) { 
    if (str.includes(newArray[j])) { 
      str = str.replace(newArray[j], '');
      j = -1;
    }
  }

  if (str.length === 0) {
    return true
  } else { 
    return false;
  }

}
