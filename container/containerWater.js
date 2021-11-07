//-------------------------------------------------------------------------------//

// Soved using nested loops; less optimal solution

// let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// function volume(arr) {
//   let vol = [];
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     let height = arr[i];
//     for (let j = i + 1; j < len; j++) {
//       let width = j - i;
//       // console.log(height, width);
//       // if height is less than the second element, keep original height
//       // if height is greater than second element, set height to second
//       if (height < arr[j]) {
//         let area = height * width;
//         vol.push(area);
//       } else {
//         let adjustedHeight = arr[j];
//         let area = adjustedHeight * width;
//         vol.push(area);
//       }
//     }
//   }
//   let maxVol = vol.reduce((a, c) => (c > a ? c : a), 0);
//   console.log(maxVol);
// }

// volume(heights);
