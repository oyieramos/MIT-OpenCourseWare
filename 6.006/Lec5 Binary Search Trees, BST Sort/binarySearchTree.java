given (N time, R request, schedArray, k = 3)

sorted array:
//check
if(N+k > R){
	for let i = 0; i < schedArray.length && done; i++
		if schedArray[i] > R
			schedArray[i] - 3 > R ? continue : return "not allowed"
			schedArray[i-1] + 3 < R ? continue : return "not allowed" 
			schedArray.push(R)	//insert
			//not sure if this is how to arrange in ascending
			schedArray.sort((a,b) => return a > b ? -1 : 1)
			done = false;
} else {
	return "not allowed: past"
}
/*
log n for search or check
constant for comparison
log n for insert -> sort (this is the problem on sorted array)
*/

linked list:
/*
insertion and sort is good
search is bad (idk why yet)
*/

heaps:
/*
checking N +/- k will take long time
flipping through whole tree
*/

binarySearchTree:
key x : value (x)
parent (x){
	left(x)
	right(x)
}

