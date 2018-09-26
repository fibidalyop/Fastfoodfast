let orderArray=[];
let x=0;
 function storeOrder(order){
 	orderArray[x]=order;
 	x++;
 	console.log("successfully stored");
 }



 function retrieveAllOrders(){
 	console.log(orderArray);
 }

  module.exports.storeOrder=storeOrder;
  module.exports.orderArray=orderArray;