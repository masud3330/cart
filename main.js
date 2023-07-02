function increment(incdic, rate){
    var count= document.getElementById(incdic);
    var price =document.getElementById(rate);
    var number= count.value++;
    console.log('count '+ count)
    

    console.log("number "+number);
     
   var PRICE= parseInt(price.innerText)*number;
   console.log(PRICE);
//    document.getElementById(rate).innerText= PRICE;
}
function decrement(incdic){
    var count= document.getElementById(incdic);
    var totalNumber =count.value--
    if(totalNumber<= 0){
        count.value=0;
       
    }
    

    // let totalNumber= incrementNumber++;
    console.log(price);
}
// document.getElementById("shirtprice").innerText= "masud";