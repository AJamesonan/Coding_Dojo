/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(str) {
    let stringObject = {};

    for (var i = 0; i < str.length; i++) {
        if (isNaN(str.charAt(i))) {
            let currentLetter = str.charAt(i).toLowerCase();
            for (var j = i + 1; j <= str.length; j++) {
                if (isNaN(str.charAt(j))) {
                    let occurrences = parseInt(str.slice(i + 1, j));
                    if (stringObject.hasOwnProperty(currentLetter)) {
                        stringObject[currentLetter] += occurrences;
                    }
                    else {
                        stringObject[currentLetter] = occurrences;
                    }
                    i = j - 1;
                    break;
                }
                else if (j == str.length) {
                    let occurrences = parseInt(str.slice(i + 1, j + 1));
                    if (stringObject.hasOwnProperty(currentLetter)) {
                        stringObject[currentLetter] += occurrences;
                    }
                    else {
                        stringObjec
                    }
                }
            }
        }
    }
}


/*****************************************************************************/
console.log(str1.length);