// time complexity best Ω(n) average Θ(n^2)	worst O(n^2) space O(1)
function insertionSort(array){
  
  for(var i = 1; i<array.length; i++){
    
    val = array[i]
    prevPoint = i - 1
    while(prevPoint >= 0 && array[prevPoint] > val){
    	// > for ascending sort, < for descending
      array[prevPoint + 1] = array[prevPoint]
      prevPoint--
    }
    array[prevPoint + 1] = val
    console.log(array);
  }

  return array
}

array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
insertionSort(array)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//recursive design
function insertionSort(array, index = 1){
  
  if(index == array.length){
    return array
  }
  
  val = array[index]
  prevPoint = index - 1
  while(prevPoint >= 0 && array[prevPoint] > val){
    // > for ascending sort, < for descending
    array[prevPoint + 1] = array[prevPoint]
    prevPoint--
  }
  
  array[prevPoint + 1] = val
  console.log(array)
  return insertionSort(array, index + 1)
}

array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
insertionSort(array, 3)
