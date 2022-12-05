

export class ListNode {
    data: number | null = null;
    nextNode: ListNode | null = null;
    constructor(data: number, nextNode = null) {
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

    // Print whole Linked List in order from head-tail
    printList() {
        let current:any = this.head
        console.log('head ->')
        while(current != null) {
            console.log(`(${current.data}), next ->`)
            current = current.nextNode
        }
        if (current === null) {
            console.log("null")
        }
    }

    printHead() {
        const head = this.head
        console.log(`Head value is ${head.data}`)
    }

    printTail() {
        let current: any = this.head
        while(current != null) {
            current = current.nextNode
            if (current?.nextNode === null) {
                console.log(`Tail value is ${current.data}`)
            }
        }
    }


    // Add node to the end of the linked list
    append(node: ListNode) {
        let current: any = this.head
        if(current.nextNode === null) {
            current.nextNode = node
        } else {
            current = current.nextNode
            while (current.nextNode != null) {
                    current = current.nextNode
            }
            current.nextNode = node
            
        }
    }   

    // Add node to beginning of linked list
    prepend(node: ListNode) {
        node.nextNode = this.head
        this.head = node
        while(node.nextNode == null) {
            let nextN = node.nextNode
            node.nextNode = nextN.nextNode
        }
         
    } 

    
    // Count many nodes the linked-list contains
    countNodes():string | number{
        let count: number = 1
        let nextBox = this.head.nextNode
        if(nextBox == null) {
            return 1
        }
    
        while(nextBox != null) {
            count++
            nextBox = nextBox.nextNode
        }
        return `This Linked-List has ${count} nodes.`
    }
    
}

const linkedList = new LinkedList(head1)

linkedList.prepend(nodeB)
linkedList.prepend(nodeC)

linkedList.append(nodeE)
linkedList.append(nodeD)



linkedList.printTail()

