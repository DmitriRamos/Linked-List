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
    // Print whole Linked List in order from head-tail
    LinkedList.prototype.printList = function () {
        var current = this.head;
        console.log('head ->');
        while (current != null) {
            console.log("(".concat(current.data, "), next ->"));
            current = current.nextNode;
        }
        if (current === null) {
            console.log("null");
        }
    };
    // Find tha value at given index of the linked list
    LinkedList.prototype.valueAt = function (index) {
        var current = this.head;
        var ind = 0;
        if (index === 0) {
            console.log("value at index ".concat(index, " is ").concat(current.data));
        }
        else {
            while (ind != index) {
                ind++;
                current = current.nextNode;
            }
            console.log("value at index ".concat(index, " is ").concat(current.data));
        }
    };
    // Search if Linked list contains given value
    LinkedList.prototype.contains = function (value) {
        var current = this.head;
        var contain = null;
        while (current != null) {
            if (current.data === value) {
                contain = true;
            }
            if (current.nextNode === null && contain === null) {
                contain = false;
            }
            if (current.nextNode === null) {
                return contain;
            }
            current = current.nextNode;
        }
    };
    // Find index of current given value in the LinkedList
    LinkedList.prototype.find = function (value) {
        var current = this.head;
        var count = 0;
        while (current != null) {
            if (current.data === value) {
                return "The value of ".concat(value, ", is located at index ").concat(count);
            }
            if (current.data != value && current.nextNode === null) {
                return null;
            }
            count++;
            current = current.nextNode;
        }
    };
    // Print head node of the linked list
    LinkedList.prototype.printHead = function () {
        var head = this.head;
        console.log("Head value is ".concat(head.data));
    };
    // Print tail node of the linked list
    LinkedList.prototype.printTail = function () {
        var current = this.head;
        while (current != null) {
            current = current.nextNode;
            if ((current === null || current === void 0 ? void 0 : current.nextNode) === null) {
                console.log("Tail value is ".concat(current.data));
            }
        }
    };
    // Add node to the end of the linked list
    LinkedList.prototype.append = function (node) {
        var current = this.head;
        if (current.nextNode === null) {
            current.nextNode = node;
        }
        else {
            current = current.nextNode;
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
    // Remove last value in linked list
    LinkedList.prototype.pop = function () {
        var current = this.head;
        while (current.nextNode.nextNode != null) {
            current = current.nextNode;
        }
        current.nextNode = current.nextNode.nextNode;
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
linkedList.prepend(nodeB);
linkedList.prepend(nodeC);
linkedList.append(nodeE);
linkedList.append(nodeD);
console.log(linkedList.find(5));
linkedList.printList();
