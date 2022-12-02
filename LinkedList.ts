
export class ListNode {
    data: number | null = null;
    nextNode: ListNode | null = null;
    constructor(data: number) {
        this.data = data;
        this.nextNode = null;
    };
};

const head1 = new ListNode(5);
const nodeB = new ListNode(4);
const nodeC = new ListNode(3);
const nodeD = new ListNode(2);
const nodeE = new ListNode(1);


/*
head.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
*/

//console.log(nodeD.next);



//console.log(countNodes(head))

class LinkedList {
    head: ListNode;
    constructor(head: ListNode) {
        this.head = head;
    };

    // Add node to the end of the linked list
    append(node: ListNode) {

    }

    // Add node to beginning of linked list
    prepend(node: ListNode) {
        node.nextNode = this.head
        this.head = node
        while(node.nextNode == null) {
            let next = node.nextNode
            node.nextNode = next.nextNode
        }
         
    } 

    
    // Count many nodes the linked-list contains
    countNodes():string | number{
        let count: number = 1
        let nextNode = this.head.nextNode
        if(nextNode == null) {
            return 1
        }
    
        while(nextNode != null) {
            count++
            nextNode = nextNode.nextNode
        }
        return `This Linked-List has ${count} nodes.`
    }
    
}

const linkedList = new LinkedList(head1)

linkedList.prepend(nodeB)
linkedList.prepend(nodeC)
linkedList.prepend(nodeD)


linkedList

console.log(linkedList.countNodes())

