"use strict";
exports.__esModule = true;
exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data, nextNode) {
        if (nextNode === void 0) { nextNode = null; }
        this.data = null;
        this.nextNode = null;
        this.data = data;
        this.nextNode = null;
    }
    ;
    return ListNode;
}());
exports.ListNode = ListNode;
;
var head1 = new ListNode(5);
var nodeB = new ListNode(4);
var nodeC = new ListNode(3);
var nodeD = new ListNode(2);
var nodeE = new ListNode(1);
/*
head.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
*/
//console.log(nodeD.next);
//console.log(countNodes(head))
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.head = head;
    }
    ;
    // Add node to the end of the linked list
    LinkedList.prototype.append = function (node) {
        var current = this.head;
        if (current === null) {
            current = node;
        }
        else {
            while (current.nextNode != null) {
                current = current.nextNode;
            }
            current.nextNode = node;
        }
    };
    // Add node to beginning of linked list
    LinkedList.prototype.prepend = function (node) {
        node.nextNode = this.head;
        this.head = node;
        while (node.nextNode == null) {
            var nextN = node.nextNode;
            node.nextNode = nextN.nextNode;
        }
    };
    // Count many nodes the linked-list contains
    LinkedList.prototype.countNodes = function () {
        var count = 1;
        var nextBox = this.head.nextNode;
        if (nextBox == null) {
            return 1;
        }
        while (nextBox != null) {
            count++;
            nextBox = nextBox.nextNode;
        }
        return "This Linked-List has ".concat(count, " nodes.");
    };
    return LinkedList;
}());
var linkedList = new LinkedList(head1);
//linkedList.prepend(nodeB)
//linkedList.prepend(nodeC)
linkedList.append(nodeC);
linkedList.append(nodeD);
console.log(linkedList);
