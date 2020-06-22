// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

function removeXNodeFromLinkedList(head, x) {
  let counter = 1;
  let first = head;
  let second = head;

  while (counter <= x) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}

removeXNodeFromLinkedList([3, 4, 5, 6], 3);
