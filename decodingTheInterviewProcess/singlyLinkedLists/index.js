//building our node class. Nodes have a value and a pointer to the next node. When we create a new node we will pass the value to our constructor. We will also initialize the pointer to null(as we're adding this node to the end of the list. )

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//creating our linked list class. constuctor will keep track of three things:
//head: the head pointer (keeps track of the first item in the linked list)
//tail: The tail pointer(Keeps track of the last item in the linked list)
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    /*List is empty */
    if (this.isEmpty()) {
      return null;
      /*Only one node in list */
    } else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      //multiple nodes in the list
      //start the pointer at the head
      let currentNode = this.head;
      //WE are removing the last node in the list
      const nodeToRemove = this.tail;
      //This will be our new tail
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }
  shift() {
    if (this.isEmpty()) {
      return null;
    } else {
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      return currentHead;
    }
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    //we want the first node
    if (index === 0) {
      return this.head;
    }
    // we want the last node
    if (index === this.length - 1) {
      return this.tail;
    }
    /*We want a node somewhere in the list */
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefinded;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
