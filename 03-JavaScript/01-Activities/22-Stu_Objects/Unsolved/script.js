//WRITE YOUR CODE BELOW
var customerOrder = {
    name: "Coffee",
    sugars: 3,
    isOrderReady: true, 
}

console.log(customerOrder.name + " " + customerOrder.sugars);

if (customerOrder.isOrderReady){
    console.log("Ready for pickup");
}else {
    console.log("Still in order queue");
}
