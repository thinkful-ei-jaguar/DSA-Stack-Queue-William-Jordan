/* eslint-disable for-direction */
const {_Node, Stack, peek, isEmpty, display } = require('./stack.js');

function is_palindrome(str) {
  let s = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let len = s.length;
  let stack = new Stack();
  
  for (let i = 0; i < len; i++) {
    let char = s.charAt(i);
    stack.push(char);
  }
 
  for(let j = 0;j < len; j--) {
    let char = s.charAt(j);
    let stackChar = stack.pop();
    if (char !== stackChar)  {
      return false;
    }
    return true;
  }
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));
// console.log(is_palindrome('a'));

function match_paren(str) {
  str.replace(' ', '-');
  let s = new Stack();

  for(let i = 0; i <= str.length; i++) {
    if(str[i] === '('){
      s.push(str[i]);
    } else if (str[i] === ')' && !isEmpty(s)) {
      s.pop();
    }
    else if (str[i] === ')' && isEmpty(s)) {
      return false;
    }

    // console.log(s, 'stack');
  }
  if (!isEmpty(s)) {
    return false;
  } else {
    return true;
  }
}
console.log(match_paren('(x + x)'));

//function sort(stack) {

//}
//console.log(sort());
