// Change the values and operators below to test your algorithm meets all conditions
var x = 10;
var expression1 = (x > 25);
var expression2 = (x < 50);

// Write Your JavaScript Code Here
if (expression1 ===true && expression2 ===true){
    console.log("True ✅ True ✅");
}
else if(expression1){
    console.log("True ✅ False ❌");
}
else if(expression2){
    console.log("False ❌ True ✅");
}
else{
    console.log("False ❌ False ❌");
}