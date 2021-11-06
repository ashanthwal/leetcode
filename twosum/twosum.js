let arr1 = [3, 6, 4, 6];

//solution using an object/hashmap

function twosum(target, arr) {
  let ntfObj = {};

  // loop over the array
  for (i = 0; i < arr.length; i++) {
    // number to find
    let ntf = ntfObj[arr[i]];
    if (ntf > = 0){
        return 
    }
    console.log(ntf);
  }
}

// Less optimized solution:

// function twosum(target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > target) {
//       continue;
//     }

//     let temp = arr[i];
//     console.log(temp);
//     for (let j = i + 1; j < arr.length; j++) {
//       let tempSum = temp + arr[j];
//       if (tempSum == target) {
//         console.log(i, j);
//       }
//     }
//   }
// }

twosum(8, arr1);
