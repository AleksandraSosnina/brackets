function check(str, bracketsConfig) {
  const numberOrCharRegexp = /[0-9]|[a-z]/i;
  let regex = "";
  for (let i = 0; i < bracketsConfig.length; i++) {
    const currentBrackets = bracketsConfig[i];  // = ['(', ')']

    let currentRegex = '';

    if (numberOrCharRegexp.test(currentBrackets[0])) {
      currentRegex = currentBrackets[0] + currentBrackets[1];
    } else {
      currentRegex = '\\' + currentBrackets[0] + '\\' + currentBrackets[1];
    }
    if (i == 0) {
      regex += currentRegex;
    } else {
      regex += '|' + currentRegex;
    }
  }

  const brackets = new RegExp(regex, 'i');
  
  while (brackets.test(str)) {
    str = str.replace(brackets, '');
  }

  if (str.length == 0) {
    return true;
  }
   else {
     return false;
   }

}

module.exports = check; 
