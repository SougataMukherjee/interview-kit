// Node class for single linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Insert at the head of the list
function insertAtHead(head, x) {
    let newNode = new Node(x);
    newNode.next = head;
    return newNode; // New head
}

// Insert at the tail of the list
function insertAtTail(head, x) {
    let newNode = new Node(x);
    if (head === null) return newNode; // If list is empty, return new node as head

    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
    }
    temp.next = newNode;
    return head;
}

// Insert at a specific index (1-based index)
function insertAtIndex(head, idx, x) {
    if (idx < 1) {
        console.error("Invalid index");
        return head;
    }

    let newNode = new Node(x);
    if (idx === 1) {
        newNode.next = head;
        return newNode; // New head
    }

    let temp = head;
    for (let i = 1; i < idx - 1; i++) {
        if (temp === null) {
            console.error("Index out of bounds");
            return head;
        }
        temp = temp.next;
    }

    if (temp === null) {
        console.error("Index out of bounds");
        return head;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    return head;
}

// Delete the head node
function deleteAtHead(head) {
    if (head === null) {
        console.error("List is empty, nothing to delete.");
        return null;
    }
    return head.next; // New head
}

// Delete the tail node
function deleteAtTail(head) {
    if (head === null || head.next === null) {
        return null; // Empty list or single node case
    }

    let temp = head;
    while (temp.next.next !== null) {
        temp = temp.next;
    }
    temp.next = null; // Remove last node
    return head;
}

// Delete a node at a specific index (1-based index)
function deleteAtIndex(head, idx) {
    if (idx < 1 || head === null) {
        console.error("Invalid index or empty list.");
        return head;
    }

    if (idx === 1) return head.next; // Delete the head node

    let temp = head;
    for (let i = 1; i < idx - 1; i++) {
        if (temp === null || temp.next === null) {
            console.error("Index out of bounds");
            return head;
        }
        temp = temp.next;
    }

    if (temp.next === null) {
        console.error("Index out of bounds");
        return head;
    }

    temp.next = temp.next.next; // Bypass the node to delete
    return head;
}

// Print the linked list
function printList(head) {
    let temp = head;
    let result = [];
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
let head = null;
head = insertAtHead(head, 3);
head = insertAtHead(head, 2);
head = insertAtHead(head, 1);
head = insertAtTail(head, 4);
head = insertAtIndex(head, 3, 99);
printList(head); // 1 -> 2 -> 99 -> 3 -> 4

head = deleteAtHead(head);
printList(head); // 2 -> 99 -> 3 -> 4

head = deleteAtTail(head);
printList(head); // 2 -> 99 -> 3

head = deleteAtIndex(head, 2);
printList(head); // 2 -> 3
