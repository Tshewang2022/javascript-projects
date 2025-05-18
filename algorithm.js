'use strict'

// using the algorithm concepts to solve complex problems
// from now on, i will focus on my own projects, that will take by storm if done correctly
// will be using the graph algorithm to solve the complex problems and the code will be written in the form of oop concept
// will get trained to write in the oop concept, where it will be written more like the java concept
// life without a discipline is fucked
// node of the binary tree
class NodeTree {
    constructor(value) {
        this.value = value
        // left node
        this.left = null;
        this.right = null; // the beginning of the node tree, both the left and right node will be null
    }
}

// to all the logic remains the same, only the syntax for the code changesc
class BinaryTree {

    // this constructor is mainly used for the init
    constructor() {
        this.root = null
    }
    // the overall formula of how to branch out the binary tree
    insert(value) {
        const newNode = new NodeTree(value);
        if (this.root == null) {
            node.left = newNode;
        } else[
            this.insertNode(node.left, newNode)
        ]
    }

    // if the node is not empty
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                // this is the recursion
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // searching the node tree
    search(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.search(node.left, value);

        } else if (value > node.value) {
            return this.search(value > node.value)
        } else {
            return true
        }
    }

}

// this is how we can return the structured code inside the oops concept
const tree = new BinaryTree();
tree.insert(10);
tree.insert(4);
tree.insert(15);
tree.insert(40);
tree.insert(9);
tree.insert(11);


console.log();


