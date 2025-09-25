// Secod 2 pointer approch
// Example
// https://assets.leetcode.com/uploads/2021/03/05/160_statement.png

var getIntersectionNode = function (headA, headB) {
  let curr1 = headA;
  let curr1Length = 0;
  while (curr1) {
    curr1 = curr1.next;
    curr1Length++;
  }

  let curr2 = headB;
  let curr2Length = 0;
  while (curr2) {
    curr2 = curr2.next;
    curr2Length++;
  }

  let diff = Math.abs(curr1Length - curr2Length);
  if (curr1Length > curr2Length) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

// 3rd easy approch
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};
