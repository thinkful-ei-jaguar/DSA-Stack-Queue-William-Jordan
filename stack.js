// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

//create a nee Stack and insert data into the stack 
function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(JSON.stringify(starTrek), 'starTrek Stack');
  return starTrek;
}
// main();

//allows you to look at the top of the stack without removing it 
function peek(stack) {
  const topNode = stack.top.data;
  console.log(topNode, 'Top Node');
}
// const starTrek = main();
// peek(starTrek);

//allows you to check if the stack is empty or not
function isEmpty(stack) {
  console.log(!stack.top);
  return !stack.top;
}
// const emptyStack = new Stack();
// const fullStack = main();
// isEmpty(emptyStack);
// isEmpty(fullStack);

//to display the stack 
function display(stack) {
  let tempNode = stack.top;
  // let displayedArr = [];
  let displayStack = '';
  while (tempNode.next !== null) {
    // displayedArr.push(tempNode.data);
    displayStack += `${tempNode.data}  \n` ;
    tempNode = tempNode.next;
  }
  // displayedArr.join();
  // console.log(displayedArr, 'Displayed Stack Array');

  displayStack += tempNode.data;
  return displayStack;
}
console.log(display(main()));