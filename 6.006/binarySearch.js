function binarySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function binarySearch(array, target) {

  var startIndex = 0,
      stopIndex = array.length - 1,
      middle,
      count = 0;

  while (startIndex < stopIndex) {
    count++;
    middle = ~~((stopIndex + startIndex) / 2);

    // adjust search area
    if (target < array[middle]) {
      stopIndex = middle - 1;
    } else if (target > array[middle]) {
      startIndex = middle + 1;
    } else {
      break; // target is found (or list is exausted)
    }

  }
  // # of iterations
  console.log(count + " iterations");
  
  //make sure it's the right value
  return (array[middle] === target) ? middle : -1;
}

var array = ["a", "b", "c", "d", "e", "f", "h", "i", "j"];
console.log(binarySearch(array, "i")); // 7 found //=> 3 iterations
console.log(binarySearch(array, "b")); // 1 found //=> 2 iterations
console.log(binarySearch(array, "g")); // -1 not found //=> 2 iterations

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var binarySearch = function(array, value) {
    var guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
	if(array[guess] === value)
	    return guess;
	else if(array[guess] < value)
	    min = guess + 1;
	else
	    max = guess - 1;	
     }
	
     return -1;
}