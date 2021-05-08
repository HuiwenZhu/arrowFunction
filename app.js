//ES5 Map function 
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //ES2015 Arrowhead shorthand
  const dbl=arr=>arr.map(val=>val*2);


//Refactor the following function to use arrow functions
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//ES2015
  const sqaAndEvens=numbers=>(numbers.map(num=>num**2)).filter(square=>square%2===0);
