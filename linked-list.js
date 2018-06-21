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
  insertBefore(item, nodeValue ){
    let previous = this.head;
    let current = this.head;
    if(this.head === nodeValue || !this.head){
      this.insertFirst(item)
    }

    while(current !== null && current.value !== nodeValue){
      previous = current;
      current = current.next;
    }
    if(current === null){
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
    while(current !== null && current.value !== value) {
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




function main(){
  let SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Boomer');
  SSL.insertAfter('Hotdog', 'Helo');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');

  console.log(
    JSON.stringify(
      SSL
    ,null,2)
  );

}
main();







