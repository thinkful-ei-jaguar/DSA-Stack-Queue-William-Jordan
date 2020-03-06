const {_Node, Stack, peek, isEmpty, display } = require('./stack.js')

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

console.log(is_palindrome('a'));

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

//function match_paren(stack) {

//}
// console.log(match_paren());

//function sort(stack) {

//}
//console.log(sort());
