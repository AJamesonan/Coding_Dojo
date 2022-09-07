if (this.head.next) {
    return this.head
}
let runner = this.head;
while (runner.next.next) {
    secondLast = runner.next;
    runner = runner.next;
}

/**
 * Retrieves the data of the second to last node in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
secondToLast() {
    if( this.head){
        if (this.head.next.next == null) {
            console.log("list too short")
            return null
        }
        let runner = this.head;
        while (runner.next) {
            secondLast = runner;
            runner = runner.next;
        }
        return secondLast
    }
    else {
        console.log("empty list")
        return false;
    }
}

/**
 * Removes the node that has the matching given val as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
 */
removeVal(val) {

}