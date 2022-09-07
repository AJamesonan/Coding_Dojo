/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];
// const expected1 = [2, 7];

// const numsA2 = [0, 1, 2, 2, 2, 7];
// const numsB2 = [2, 2];
// const expected2 = [2];

// const numsA3 = [0, 1, 2, 2, 2, 7];
// const numsB3 = [10];
// const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection2(sortedA, sortedB) {
    let ordered = [];

    for(let i = 0; i<sortedA.length; i++){
        if (sortedB.includes(sortedA[i])){
            for(let j = 0; j< sortedB.length; j++){
                if(sortedB[j]== sortedA[i] && !ordered.includes(sortedB[j])){
                    ordered.push(sortedB[j]);
                }
            }
        }
    }
    return ordered;
}


function orderedIntersection1(sortedA, sortedB) {
    let ordered = [];

    for(let i = 0; i<sortedA.length; i++){
        if (sortedB.includes(sortedA[i]) && !ordered.includes(sortedA[i])){
            let index = sortedB.indexof(sortedA[i])
            ordered.push(sortedB[index])
        }
    }
    return ordered;
}


/*****************************************************************************/