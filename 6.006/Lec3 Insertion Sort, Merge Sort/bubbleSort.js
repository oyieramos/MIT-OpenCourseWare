// time complexity best Ω(n) average Θ(n^2)	worst O(n^2) space O(1)
function bubbleSort(array){
	//swap = true
	for(var j = array.length - 1; j >= 0 /*&& swap*/; j--){
		//swap = false
		for(var i = 0; i < j; i++){

			if(array[i] > array[i+1]){
				// > for ascending < for descending
				var temp = array[i+1]
				array[i+1] = array[i]
				array[i] = temp
				//swap = true
			}
      
		}
		console.log(array)
	}
	
	return array
}

array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
bubbleSort(array1);
// function bubbleSort(array, ascending); (array[i] > array[i+1]) === ascending;
// swap boolean is not good for small array because of its constant work requirement
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Normal [i think the for loop could be optimized, not sure tho]
const bubbleSort = function(array) {
  let swaps;
  do {
    swaps = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swaps = true;
      }
    }
  } while (swaps);
  
  return array;
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Recursive design
function bubbleSort(array, pointer = array.length - 1){
	
	if(pointer === 0){
	  return array
	}
	
	for(var i = 0; i < pointer; i++){
	  if(array[i] > array[i+1]){
	    var temp = array[i+1]
	    array[i+1] = array[i]
	    array[i] = temp
	  }
	}
	console.log(array);
	return bubbleSort(array, pointer - 1)
}

array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
bubbleSort(array1);