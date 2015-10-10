var gameArray = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

var consoleArray = function(array){
  array.forEach(function(item){
    console.log(item);
  })
}

var createNumber = function(array){
  var randomRow = Math.floor(Math.random() * 4);
  var randomCol = Math.floor(Math.random() * 4);

  while(array[randomRow][randomCol] !== 0){
    var randomRow = Math.floor(Math.random() * 4)
    var randomCol = Math.floor(Math.random() * 4)
  }

  array[randomRow][randomCol] = 2;

}

var initializeGame = function(array){
  createNumber(array);
  createNumber(array);
  consoleArray(array);
}

initializeGame(gameArray)

var smashLeft = function(array){
  array.forEach(function(item){
    for(var i = 0; i < item.length; i++){
      if(item[i] === 0){
        item.splice(i, 1)
        item.push(0)
      }
    }
    for(var i = 0; i < item.length; i++){
      if(item[i] === 0){
        item.push(0)
        item.splice(i, 1)
      }
    }
    for(var i = 0; i < item.length; i++){
      if(item[i] === item[i + 1] && item[i] !== 0){
        item[i] += item[i + 1];
        item.splice(i + 1, 1);
        item.push(0);
      }
    }
  })
  createNumber(array)
  consoleArray(array);
}

var smashRight = function(array){
  array.forEach(function(item){
    for(var i = 0; i < item.length; i++){
      if(item[i] === 0){
        item.splice(i, 1)
        item.unshift(0)
      }
    }
    for(var i = item.length - 1; i > 0; i--){
      if(item[i] === item[i - 1]){
        item[i] += item[i - 1];
        item.splice(i - 1, 1)
        item.unshift(0);
      }
    }
  })
  createNumber(array)
  consoleArray(array);
}

var smashUp = function(array){
  transpose(array);
  array.forEach(function(item){
    for(var i = 0; i < item.length; i++){
      if(item[i] === 0){
        item.splice(i, 1)
        item.push(0)
      }
    }
    for(var i = 0; i < item.length; i++){
      if(item[i] === 0){
        item.push(0)
        item.splice(i, 1)
      }
    }
    for(var i = 0; i < item.length; i++){
      if(item[i] === item[i + 1] && item[i] !== 0){
        item[i] += item[i + 1];
        item.splice(i + 1, 1);
        item.push(0);
      }
    }
  })
  transpose(array);
  createNumber(array)
  consoleArray(array);
}

var smashDown = function(array){
  transpose(array);
  array.forEach(function(item){
    for(var i = 0; i < item.length; i++){
      if(item[i] === 0){
        item.splice(i, 1)
        item.unshift(0)
      }
    }
    for(var i = item.length - 1; i > 0; i--){
      if(item[i] === item[i - 1]){
        item[i] += item[i - 1];
        item.splice(i - 1, 1)
        item.unshift(0);
      }
    }
  })
  transpose(array);
  createNumber(array)
  consoleArray(array);
}

var transpose = function(array){
  var newArray = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
  for(var i = 0; i < array.length; i++){
    for(var k = 0; k < array.length; k++){
      newArray[i][k] = array[i][k]
    }
  }
  for(var i = 0; i < newArray.length; i++){
    for(var k = 0; k < newArray.length; k++){
      array[i][k] = newArray[k][i]
    }
  }
}

$(document).ready(function(){
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
    // Left arrow key pressed
    case 37:
      smashLeft(gameArray);
      break;
    // Up Arrow Pressed
    case 38:
      smashUp(gameArray);
      break;
    // Right Arrow Pressed
    case 39:
      smashRight(gameArray);
      break;
    // Down Arrow Pressed
    case 40:
      smashDown(gameArray);
      break;
  }

var x = 1;
while(x <= 16){
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      if(gameArray[i][j] === 0){
        $('.data' + x).html(" ")
      } else {
        $('.data' + x).html(gameArray[i][j])
      }
      x += 1
    }
  }
}

  // $('.data1').html(gameArray[0][0]);
  // $('.data2').html(gameArray[0][1]);
  // $('.data3').html(gameArray[0][2]);
  // $('.data4').html(gameArray[0][3]);
  // $('.data5').html(gameArray[1][0]);
  // $('.data6').html(gameArray[1][1]);
  // $('.data7').html(gameArray[1][2]);
  // $('.data8').html(gameArray[1][3]);
  // $('.data9').html(gameArray[2][0]);
  // $('.data10').html(gameArray[2][1]);
  // $('.data11').html(gameArray[2][2]);
  // $('.data12').html(gameArray[2][3]);
  // $('.data13').html(gameArray[3][0]);
  // $('.data14').html(gameArray[3][1]);
  // $('.data15').html(gameArray[3][2]);
  // $('.data16').html(gameArray[3][3]);
});



})
