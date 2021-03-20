class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let slow = head;
  let fast = head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) break;
  }

  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}