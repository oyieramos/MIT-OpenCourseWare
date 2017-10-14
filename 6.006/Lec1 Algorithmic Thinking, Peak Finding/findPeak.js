// worst case time is O(n)
function findPeak(array){

  if(array[0] > array[1]){
    return array[0]
  } else if (array[array.length - 2] < array[array.length - 1]){
    return array[array.length-1]
  }
  
  for(var i = 1; i < array.length - 2; i++){
    if(array[i-1] < array [i] && array[i] > array[i+1]){
      return array[i];
    }
  }
  
  return "There is no peak";
}

 array1 = [0, 5, 7, 11, 78, 32, 45, 31, 74, 1, 42, 134, 11];
 findPeak(array1);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  function findAllPeak(array){
//   var peaks = [];
    
//   if(array[0] > array[1]){
//     peaks.push(array[0])
//   } else if (array[array.length - 2] < array[array.length - 1]){
//     peaks.push(array[array.length-1])
//   }
  
//   for(var i = 1; i < array.length - 2; i++){
//     if(array[i-1] < array [i] && array[i] > array[i+1]){
//       peaks.push(array[i])
//     }
//   }
  
//   return peaks;
// }

//  array1 = [0, 5, 7, 11, 78, 32, 45, 31, 74, 1, 42, 134, 11];
//  findAllPeak(array1);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// returns undefined if array is sorted ascending or descending
function findPeak(a, i, f){
  m = Math.floor( (i+f)/2 );
  if(a[m - 1] <= a[m] && a[m] >= a[m + 1]){
    return a[m]
  } else if(a[m-1] > a[m]){
    findPeak(a, i, m-1);
  } else if(a[m] < a[m+1]){
    findPeak(a, m+1, f);
  }
}
  
array1 = [0, 5, 7, 11, 78, 32, 45, 31, 74, 1, 42, 134, 11];
findPeak(array1, 0, array1.length - 1);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// returns undefined if array is sorted ascending or descending
function findPeak(a, i, f){
  m = Math.floor( (i+f)/2 );
  if(a[m - 1] <= a[m] && a[m] >= a[m + 1]){
    console.log(a[m], m)
    return a[m]
  } else if(a[m-1] > a[m]){
    findPeak(a, i, m-1);
  } else if(a[m] < a[m+1]){
    findPeak(a, m+1, f);
  }
}

// generates random array
var n = 25;
var newArr = [];
while (n > 0){
  newArr.push(Math.floor(Math.random() * 100));
  n--;
}

console.log(newArr);
findPeak(newArr, 0, newArr.length - 1);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this is the best I have so far :)
function findPeak(a, i, f){

  function peak(a, i, f){
    m = Math.floor( (i+f)/2 );
    if(a[m - 1] <= a[m] && a[m] >= a[m + 1]){
      return [a[m], m]
    } else if(a[m-1] > a[m]){
      peak(a, i, m-1);
    } else if(a[m] < a[m+1]){
      peak(a, m+1, f);
    }
  }
  
  if(a[i] >= a[i+1]){
    return [a[i], i]
  } else if(a[f-1] <= a[f]){
    return [a[f], f]
  } else {
    peak(a, i, f)
  }
  
}
  
array1 = [0, 5, 7, 11, 78, 32, 45, 31, 74, 1, 42];
// array1.sort((a,b) => a-b);
findPeak(array1, 0, array1.length - 1);