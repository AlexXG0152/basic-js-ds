const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers list and an integer k,
 * remove all elements from list that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For list = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(list, k) {
  let currentNode = list;
  let nextNode = list.next;

  if (currentNode.value === k) {
    list = currentNode.next
  };
  while (nextNode !== null) {
    if (nextNode.value === k) {
      currentNode.next = nextNode.next
    };
    currentNode = nextNode;
    nextNode = nextNode.next;
  };
  return list;
};