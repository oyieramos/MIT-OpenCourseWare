function create2DArray(num){
  
  var newArr = [];
  for(var i = 0; i < num; i++){
  
    var newArr2 = [];
    for(var j = 0; j < num; j++){
      newArr2.push(Math.floor(Math.random() * 100));
    }
    newArr.push(newArr2)
    
  }
  return newArr;
  
}

create2DArray(3);