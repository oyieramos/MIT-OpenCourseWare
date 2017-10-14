// time complexity best Ω(n^2) average Θ(n^2)  worst O(n^2)  space O(1)
function selectionSort(array){
  
  for(var i = 0; i < (array.length - 1); i++){
    
    var m = i;
    for(var j = i+1; j < array.length; j++){
      if(array[m] > array[j]){
        // > for ascending, < for descending
        m = j;
      }
    }
    
    if (i != m){
      var t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    console.log(array)
  }
  
  return array;
}

 array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
 selectionSort(array1);

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//recursive design
function selectionSort(array, index = 0){

  if (index == array.length - 1){
    return array
  }

  var m = index, j = m+1
  while(j < array.length){

    if(array[m] > array[j]){
      // > for ascending sort, < for descending
      m = j
    }
    
    j++
  }

  if(index != m){
    var t = array[m];
    array[m] = array[index];
    array[index] = t;
  }
  
  console.log(array)
  return selectionSort(array, index + 1)
}

 array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
 selectionSort(array1);
 selectionSort(array1, 3);