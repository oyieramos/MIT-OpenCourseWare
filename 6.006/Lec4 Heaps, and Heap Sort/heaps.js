//there are alot of improvement but yeah this still awesome for me ;)
//time complexity Ω(n log(n))	Θ(n log(n))	O(n log(n))	space O(1)
//time complex could also argue to be Θ(n)
function buildHeap(A){
	var heap = []
	for(var i = 1; i <= A.length; i++){
		var leaf = [A[i-1], i]
		heap.push(leaf)
	}

	return heap
}

// buildMaxHeap takes c (time cost of maxHeapify)
// of n (math.round A.length / 2)
function buildMaxHeap(A){
	n = Math.round(A.length / 2)
	for(var i = n; i >= 1; i--){
		maxHeapify(A, i);
	}
} 

// maxHeapify is from bot to top
function maxHeapify(A, i = 1){
	// l = left(i)
	// r = right(i)
	(A[2*i] > A[(2*i) + 1]) ? ind = 2*i : ind = (2*i) + 1;
	(A[ind] > A[i]) ? swap(A[ind], A[i]) : null;
}

// maxHeapify2 is from top to bot
function maxHeapify2(A, i = 1){

	if(i > Math.round(A.length / 2)){
		return
	}

	(A[2*i] > A[(2*i) + 1]) ? ind = 2*i : ind = (2*i) + 1;

	if (A[ind] > A[i]){
		swap(A[ind], A[i])
		maxHeapify2(A, ind)
	} else {
		return
	}
}

function insert(A, val){
	var leaf = [val, A.length + 1]
	A.push(leaf)
	buildMaxHeap(A)
}

function extractMax(A){
	swap(A[1][0], A[A.length][0])
	var output = A.pop()
	maxHeapify2(A)
	return output
}