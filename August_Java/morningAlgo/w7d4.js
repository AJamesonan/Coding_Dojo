class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head) {
            return false;
        }
        return true;
    }

    insertAtFront(data) {
        let newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        return;
    }


    removeFromFront() {
        if (!this.isEmpty) {
            this.head = this.head.next;
        }
        return;
    }

    insertAtBack(data) {
        let newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return;
    }

    display() {
        if (this.isEmpty()) {
            console.log("This list is empty!")
        } else {
            let n = 0;
            let runner = this.head;
            console.log('node ' + n + ': ' + runner.data);
            while (runner.next) {
                runner = runner.next;
                n++;
                console.log('node ' + n + ': ' + runner.data);
            }
        }
        return;
    }


    /**
       * Calls insertAtBack on each item of the given array.
       * - Time: O(n * m) n = list length, m = arr.length.
       * - Space: O(1) constant.
       * @param {Array<any>} vals The data for each new node.
       * @returns {SinglyLinkedList} This list.
       */
    seedFromArr(vals) {
        for (let i = 0; i < vals.length; i++) {
            this.insertAtBack(vals[i])
        }

    }

    /**
        * Converts this list into an array containing the data of each node.
        * - Time: O(n) linear.
        * - Space: O(n).
        * @returns {Array<any>} An array of each node's data.
        */
    toArr() {
        let arr = []
        if (this.head) {
            arr.push(this.head)
            while (this.next) {
                arr.push(this.next)
                let nextPerson = this.next;
                this.next = nextPerson.next;
            }
        }
        return null
    }

    /**
       * Creates a new node with the given data and inserts it at the back of
       * this list.
       * - Time: O(?).
       * - Space: O(?).
       * @param {any} data The data to be added to the new node.
       * @param {?ListNode} runner The current node during the traversal of this list
       *    or null when the end of the list has been reached.
       * @returns {SinglyLinkedList} This list.
       */
    insertAtBackRecursive(data, runner = this.head) {
        if (runner == null) {
            runner = new ListNode(data);
            return runner;
        }
        else if (runner.next == null) {
            runner.next = new ListNode(data)
            return runner.next;
        }
        this.insertAtBackRecursive(data, runner.next);
    }

    /**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */
    removeBack() {
        if (this.head.next) {
            return this.head
        }
        let runner = this.head;
        while (runner.next.next) {
            secondLast = runner.next;
            runner = runner.next;
        }


        /**
         * Determines whether or not the given search value exists in this list.
         * - Time: O(?).
         * - Space: O(?).
         * @param {any} val The data to search for in the nodes of this list.
         * @returns {boolean}
         */
        contains(val) { }

        /**
         * Determines whether or not the given search value exists in this list.
         * - Time: O(?).
         * - Space: O(?).
         * @param {any} val The data to search for in the nodes of this list.
         * @param {?ListNode} current The current node during the traversal of this list
         *    or null when the end of the list has been reached.
         * @returns {boolean}
         */
        containsRecursive(val, current = this.head) { }

        /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
        secondToLast() {
            if (this.head) {
                if (this.head.next == null) {
                    console.log("only 1 node")
                    return null
                }
                if (this.head.next.next == null) {
                    console.log("list too short")
                    return null
                }
                let runner = this.head;
                while (runner.next) {
                    var secondLast = runner;
                    runner = runner.next;
                }
                return secondLast.data
            }
            else {
                console.log("empty list")
                return null;
            }
        }

        /**
     * Reverses this list in-place without using any extra lists.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
        reverse() {
            if(this.isEmpty || !this.heah.next){
                return this;
            }
            let runner = this.head;
            let nodeHolder = runner.next;
            var dad; 
            while(runner.next){
                nodeHolder = nodeHolder.next;
                dad = runner.next;
                runner.next.next = runner;
                runner = nodeHolder
                runner = dad
            }
            return this;
        }

        /**
         * Determines whether the list has a loop in it which would result in
         * infinitely traversing unless otherwise avoided. A loop is when a node's
         * next points to a node that is behind it.
         * - Time: (?).
         * - Space: (?).
         * @returns {boolean} Whether the list has a loop or not.
         */
        hasLoop() { }

        /**
         * Removes the node that has the matching given val as it's data.
         * - Time: O(?).
         * - Space: O(?).
         * @param {any} val The value to compare to the node's data to find the
         *    node to be removed.
         * @returns {boolean} Indicates if a node was removed or not.
         */
        //     removeVal(val) { }
        // }
    }

var node = new SinglyLinkedList;

node.insertAtBack(5)
// node.insertAtBack(4)
// node.insertAtBack(6)
// node.insertAtBack(7)
// node.insertAtBack(8)


console.log(node.secondToLast())
