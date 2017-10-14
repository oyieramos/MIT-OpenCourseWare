//time Ω(n log(n))	Θ(n log(n))	O(n log(n))	space O(n)
//time minimally varies if the array is sorted ?
function sort(array){
  var length = array.length,
  mid = Math.floor(length * 0.5),
  left = array.slice(0, mid),
  right = array.slice(mid, length);
  
  if (length === 1){
    return array;
  }
  
  // console.log(left, right);
  return merge(sort(left), sort(right));
}

function merge(left, right){
  var result = [];
  
  while(left.length || right.length){
    
    if(left.length && right.length){
      
      if(left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
      
    }else if(left.length){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
    
  }
  
  // console.log("merge ", result);
  return result;
  
}

 array1 = [0, 5, 7, 11, 78, 32, 45, 31, 74, 1, 42, 134, 11];
 sort(array1);