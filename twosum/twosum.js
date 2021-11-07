let arr1 = [1, 5, 7, 2, 3];

//solution using an object/hashmap

function twosum(target, arr) {
  // number to find object
  let ntfObj = {};
  const len = arr.length;

  // loop over the array
  for (let i = 0; i < len; i++) {
    // number to find in the object
    let ntf = target - arr[i];
    //if the object already has an existing complementary value
    if (ntfObj[arr[i]] >= 0) {
      return [ntfObj[arr[i]], i];
    } else {
      ntfObj[ntf] = i;
    }
    //else push the
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

console.log(twosum(8, arr1));
