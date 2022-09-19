// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"


// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`

// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"

function isEqualTakeTwo(a,b) {
  if (a === b) {
    console.log('They are equal in type and value');
  } else if (a == b) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}
isEqualTakeTwo(12, 13);
isEqualTakeTwo(100, 100);
isEqualTakeTwo(70, "70");

