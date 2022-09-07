
/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }


    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if (this.root) {
            return false;
        }
        return true;
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        let newNode = new BSTNode(newVal)
        if (this.isEmpty()) {
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while (runner) {
            if (newVal === runner.data) {
                runner.count++;
                return this;
            }
            if (newVal > runner.data) {
                if (runner.right) {
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            } else {
                if (runner.left) {
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            }
        }
    }


    /**
    * Retrieves the smallest integer data from this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} current The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {number} The smallest integer from this tree.
    */
    min(current = this.root) { }

    /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    //     minRecursive(current = this.root) {
    //     min(current = this.root) {
    //     if (this.isEmpty()) { 
    //         return null; 
    //     }
    //     else if (current.left != null) {
    //         this.min(current.left);
    //     }
    //     else { return current }
    // }

    /**
    * Determines if this tree contains the given searchVal.
    * - Time: O(?).
    * - Space: O(?).
    * @param {number} searchVal The number to search for in the node's data.
    * @returns {boolean} Indicates if the searchVal was found.
    */
    // checks if a tree contains an item
    contains(searchVal) {
        if (this.isEmpty()) { return false }

        let current = this.root;
        while (current != null) {
            if (searchVal > current.data) {
                current = current.right;
            }
            else if (searchVal < current.data) {
                current = current.left;
            }
            else if (searchVal == current.data) {
                return true;
            }
        }
        return false;
    }


    minRecursive(current = this.root) {
        if (this.isEmpty()) {
            return null
        }
        if (current.left != null) {
            return this.minRecursive(current.left)
        }
        return current.data
    }

    containsRecursive(searchVal, current = this.root) {
        if (current == null) { return false }

        if (searchVal == current.data) {
            return true;
        }

        if (searchVal > current.data) {
            return this.containsRecursive(searchVal, current.right);
        } else {
            return this.containsRecursive(searchVal, current.left);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    min(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        while (current.left) {
            current = current.left
        }
        return current.data;
    }

    max(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    range(startNode) {
        let min = startNode.min();
        let max = startNode.max();
        var range = max - min;
        console.log(range)
        return range;
    }
    // Advice: make a max() and use it together with min()

    /**
    * Inserts a new node with the given newVal in the right place to preserver
    * the order of this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {number} newVal The data to be added to a new node.
    * @param {Node} curr The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {BinarySearchTree} This tree.
    */
    insertRecursive(newVal, current = this.root) {
        if (this.isEmpty()) {
            this.root = new BSTNode(newVal);
            return this;

        } else if (newVal > current.data && !current.right) {
            current.right = new BSTNode(newVal);
            return this;

        } else if (newVal > current.data && current.right) {
            return this.insertRecursive(newVal, current.right);

        } else if (newVal < current.data && !current.left) {
            current.left = new BSTNode(newVal);
            return this;

        } else if (newVal < current.data && current.left) {
            return this.insertRecursive(newVal, current.left)
        }
    }

    /**
 * DFS Inorder: (Left, CurrNode, Right)
 * Converts this BST into an array following Depth First Search inorder.
 * See debugger call stack to help understand the recursion.
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
    toArrInorder(node = this.root, vals = []) {

        if (this.isEmpty()) {
            return vals;
        }
        // if (!node.left) { //end of left
        //     return vals.push(node.data);
        // }
        if (node.left) { //move left
            console.log("left", node.data)
            this.toArrInorder(node.left, vals)
        }
        vals.push(node.data);
        if (node.right) { //move right
            console.log("right ", node.data)
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) { }

    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(node = this.root, vals = []) { }


    minRecursive(current = this.root) {
        if (this.isEmpty()) {
            return null
        }
        if (current.left != null) {
            return this.minRecursive(current.left)
        }
        return current.data
    }

    containsRecursive(searchVal, current = this.root) {
        if (current == null) { return false }

        if (searchVal == current.data) {
            return true;
        }

        if (searchVal > current.data) {
            return this.containsRecursive(searchVal, current.right);
        } else {
            return this.containsRecursive(searchVal, current.left);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range() { }
    // Advice: make a max() and use it together with min()

    /**
    * Inserts a new node with the given newVal in the right place to preserver
    * the order of this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {number} newVal The data to be added to a new node.
    * @param {Node} curr The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {BinarySearchTree} This tree.
    */
    insertRecursive(newVal, curr = this.root) {
        let newNode = new BSTNode(newVal)
        if (this.isEmpty()) {
            this.root = newNode;
            return this;
        }
        if (newVal > curr.data) {
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = newNode;
                return this;
            }
        } else {
            if (curr.left) {
                curr = curr.left;
            } else {
                curr.left = newNode;
                return this;
            }
        }
    }
    toArrLevelorderRecursive(nodeList = [this.root], results = []) {
        if (nodeList.length === 0) {
            return results;
        }

        const node = nodeList.shift();
        results.push(node.data);

        if (node.left) {
            nodeList.push(node.left);
        }
        if (node.right) {
            nodeList.push(node.right);
        }

        return this.toArrLevelorderRecursive(nodeList, results);
    }

    size(current = this.root){
        if (current === null) {
            return 0;
        }
        return this.size(current.left) + this.size(current.right) + 1;
    }

    /**
 * Calculates the height of the tree which is based on how many nodes from
 * top to bottom (whichever side is taller).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during traversal of this tree.
 * @returns {number} The height of the tree.
 */
    height(nood = this.root) {
        var count
        while (node.left || node.right) {
            count++
        }
        return count
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) { }
}


let nnode = new BinarySearchTree();
nnode.insert(6)
nnode.insert(5)
nnode.insert(7)
nnode.insert(8)
nnode.insert(200)

