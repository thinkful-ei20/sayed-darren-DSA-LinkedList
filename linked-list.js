class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item 
    while (currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  // athena , boomer
  insertBefore(item, nodeValue) {
    let previous = this.head;
    let current = this.head;
    if (this.head === nodeValue || !this.head) {
      this.insertFirst(item)
    }

    while (current !== null && current.value !== nodeValue) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      console.log('Item not found');
      return;
    }
    previous.next = new _Node(item, current)
  }

  insertAfter(item, value) {
    if (!this.head) {
      this.insertFirst(item);
    }

    let current = this.head;
    while (current !== null && current.value !== value) {
      current = current.next;
    }
    if (current === null) {
      console.log('Item not found');
      return;
    }
    current.next = new _Node(item, current.next)
  }

  insertAt(item, num) {
    if (!this.head || num <= 1) {
      this.insertFirst(item);
      return;
    }

    let count = 1;
    let previous = this.head;
    let current = this.head;

    while (current !== null && count !== num) {
      count += 1;
      previous = current;
      current = current.next;
    }

    if (current === null) {
      previous.next = new _Node(item, current)
      return;
    }

    previous.next = new _Node(item, current)

  }
}

function display(sll) {
  let current = sll.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

function displaySize(sll) {
  let count = 0;
  let current = sll.head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

function isEmpty(sll) {
  return !sll.head;
}

function findPrevious(sll, item) {
  let previous = sll.head;
  let current = sll.head;
  while (current !== null && current.value !== item) {
    previous = current;
    current = current.next;
  }
  if (current === null) {
    console.log('Item does not exist');
    return;
  }
  return previous;
}

function findLast(sll) {
  let current = sll.head;
  if (!sll.head) {
    return sll.head;
  }
  while (current.next !== null) {
    current = current.next;
  }
  return current;
}

// MYSTERY PROGRAM

// | | | | | |
//  1 2 2 4 6

//value 4, next: { value: 1, next: {value: 6}

// current = lst.head = 1
// newNode = current = 1
// newNode = 2
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
// O(n^2)
// This function removes duplicates from a linked list

// REVERSE A LIST
function reverse(list) {
  // A -> B -> C -> D -> null => D -> C -> B -> A -> null
  // current = list.head
  // previous = list.head
  // current = current.next -> previous.next = previous
  let previous = null;
  let current = list.head;
  let next = null;
  while (current !== null) {
    next = current.next; // B --- C
    current.next = previous; // A -> null --- B -> A
    previous = current; // A --- B
    current = next; // B --- C
  }
  list.head = previous;
  return list;
}

function thirdFromTheEnd(sll){
  let length = displaySize(sll);
  console.log("length in thirdfromend: ",length);
  
  let current = sll.head;
  let count = 0;
  while(count !== length - 3){
    count++;
    current = current.next;
  }
  return current;
}

//
function middleOfAList(sll){
  let current = sll.head;
  let slow = current;
  let fast = current.next;
  while(fast !== null && fast.next !== null){    
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value
}
//1st round
//
//
//

// function cycleInAList(sll){

// }


function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  SLL.insertLast('Boomer');

  console.log(
    JSON.stringify(
      SLL
      , null, 2)
  );
  // console.log(displaySize(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL,'Starbuck'));
  // console.log(findLast(SLL));
  // WhatDoesThisProgramDo(SLL);
  // console.log(
  //   JSON.stringify(
  //     SLL
  //   ,null,2)
  // );
  // reverse(SLL);
  console.log(middleOfAList(SLL));
  display(SLL);



}
main();