// Binary Search Tree


function insert(val){
	
}

/*
to be able to create a schematic of a BST
that have its methods inherent
then be able create one at such
apply AVL for balancing
	leftRotate()
	rightRotate()
	find()
	insert()
	delete()
	min()
	max()
	nextLarger()
	nextSmaller()
augmentation:
	height()	//largest # of node to reach leaf
	rank(val) 	//return # of elem below val

*/
// insert, search (returns true, false), depthFirstLog i dont know what it does
var BinaryTree = new JS.Class({
  initialize: function(left, value, right) {
    this.value = value;
    this.left  = left;
    this.right = right;
  },
  
  isEmpty: function() {
    return !this.value;
  },
  
  insert: function(x) {
    if (this.isEmpty()) {      
      this.value = x;
    } else if (x < this.value) {
      (this.left)
        ? this.left.insert(x)
        : this.left = new BinaryTree(null, x, null);
    } else if (x > this.value) {
      (this.right)
        ? this.right.insert(x)
        : this.right = new BinaryTree(null, x, null);
    }
  },
  
  isMember: function(x) {
    if (this.isEmpty()) {
      return false;      
    } else if (x < this.value) {      
      return !!this.left && this.left.isMember(x);
    } else if (x > this.value) {      
      return !!this.right && this.right.isMember(x);
    } else {      
      return true;
    }
  }
});

// insert, contains (search => true, false), 
var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // recurse right or left through children
  if (value < this.value) {
    if (this.left === null)  {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null)  {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  if (target === this.value) return true;
  // recurse right or left through children
  if (this.value > target && this.left) return this.left.contains(target);
  if (this.value < target && this.right) return this.right.contains(target);
  return false;
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  // recurse right or left through children
  if (this.left) this.left.depthFirstLog(callback);
  if (this.right) this.right.depthFirstLog(callback);
};

// insert, search
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  // don't allow duplicate values in tree
  if (value === this.value) {
    return new Error("cannot insert a duplicate value into this binary search tree");
  };
  
  // if value to insert is less than root value, go left
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  
  // if value to insert is greater than root value, go right
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(targetValue) {
  // base case: targetValue is found in tree
  if (this.value === targetValue) {
    return true;
  }
  
  // if root value is less than the target value and the right child isn't empty, go right
  if (this.value < targetValue && this.right) {
    return this.right.contains(targetValue);
  }
  
  // if root value is greater than the target value and the left child isn't empty, go left
  if (this.value > targetValue && this.left) {
    return this.left.contains(targetValue);
  }
  
  // targetValue not found in tree
  return false;
};