// 1) Where is carNoise stored?
//carNoise is stored in the global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// goFast is stored in the global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // when is used, when the go fast is called 
  
  // 5) Where is makeNoise stored?
  //inside of the function 
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
