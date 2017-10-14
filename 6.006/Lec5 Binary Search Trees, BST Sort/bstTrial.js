function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.nextSmaller = function(val){
  //to be continued
  if(this.value === null){
    return null;
  } 
  
}

Node.prototype.nextLarger = function(val){
  //could still need some optimization, or add a key value in a node
  //add a function that could traverse the tree while remembering parent value
  if(this.value === null){
    
    return null;
    
  } else if(val < this.value){
    // check left
    if(this.left === null){
      return this.value;
    } else if(val < this.left.value){
      console.log("go left");
      return this.left.nextLarger(val);
    } else if(val >= this.left.value){
      //I need an index here, to remember this.value
      //or another function that returns true / false
      if(this.left.right === null || val >= this.left.right.value){
        return this.value;
      } else {
        //this needs optimization
        return this.left.right;
      }
    } 
    
  } else if(val >= this.value){
    //check right
    if(this.right === null){
      return null;
    } else {
      console.log("go right");
      return this.right.nextLarger(val);
    }
    
  }
  
};

Node.prototype.min = function(){
  if (this.left !== null){
    return this.left.min();
  }
  
  return this.value;
};

Node.prototype.max = function(){
  if(this.right !== null){
    return this.right.max();
  }
  
  return this.value;
};

Node.prototype.search = function(val){
  // this method takes worst case lg n time
  if (val == this.value){
    
    return true;
   
  } else if (val < this.value && this.left !== null){
    
    return this.left.search(val);
    
  } else if (val > this.value && this.right !== null){
  
    return this.right.search(val);
    
  } else {
    
    return false;
    
  }
  
  
};

Node.prototype.traverse = function(){
  // this method takes worst case n lg n time
  if (this.left !== null){
    this.left.traverse();
  }
  
  output.push(this.value);
  // console.log(this.value);

  if (this.right !== null){
    this.right.traverse();
  }
  
};

Node.prototype.deleteNode = function(val){

};

Node.prototype.addNode = function(val){
  // this method takes worst case lg n time
  if (val < this.value){
    
    if (this.left === null){
      this.left = new Node(val);
    } else {
      this.left.addNode(val);
    }
    
  } else if(val > this.value){
  
    if (this.right === null){
      this.right = new Node(val);
    } else {
      this.right.addNode(val);
    }
    
  } else {
    console.log("the tree already have this value");
  }
  
};

function Tree(){
    var output = [];
  this.root = null;
}

Tree.prototype.nextSmaller = function(val){
  return this.root.nextSmaller(val);
}

Tree.prototype.nextLarger = function(val){
  return this.root.nextLarger(val);
};

Tree.prototype.nextSmaller = function(val){
  // i think to implement this i need to edit my node? or something 
};

Tree.prototype.min = function(){
  return this.root.min();
};

Tree.prototype.max = function(){
    return this.root.max();
};

Tree.prototype.search = function(val){
  return this.root.search(val);
};

Tree.prototype.traverse = function(){
    output = [];
  
  this.root.traverse();
  
  return output;
};

Tree.prototype.delete = function(val){

};

Tree.prototype.insert = function(val){

  if (this.root === null){
    this.root = new Node(val);
  } else {
     this.root.addNode(val);
  }

};

var tree = new Tree();

// var randomNum = 10;

// while(randomNum >= 0){
//  tree.insert(Math.floor(Math.random() * 20));
//  randomNum--;
// }

tree.insert(11);
tree.insert(13);
tree.insert(7);
tree.insert(5);
tree.insert(22);
tree.insert(1);
tree.insert(17);
tree.insert(31);
tree.insert(45);
tree.insert(12);
tree.insert(4);

tree.nextLarger(45);