var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
// // We can console.log the `8` in this array if we

// // the first index `0` will select the `[2, 5, 8]` sub-array
// // the second index `2` will select the `8` out of that sub-array

// function isPresent2d(arr2d,value){
//     for(var i = 0; i < arr2d.length; i++){
//         for(var x = 0; x < arr2d[i].length; x++){
//         if (value == arr2d[i][x]){
//         return true;
//         }
//         }
//     }
//     return false
//     }
// console.log(isPresent2d(arr2d, 9))



function flatten(arr2d){
    var flat = [];
    for(var i = 0; i < arr2d.length; i++){
        for(var x = 0; x < arr2d[i].length; x++){
        flat.push(arr2d[i][x]);
        }
    }
    return flat
}
// var result = flatten(arr2d)
// console.log(result)
// console.log(flatten(arr2d))
for(var num1 =0; num1<=3;num1++)
    {
    for(var num2 =0; num2<=2;num2++)
    {
       if(num1 == 5)
       {
       console.log('coder');
        }
    }
    console.log('ninja');
}