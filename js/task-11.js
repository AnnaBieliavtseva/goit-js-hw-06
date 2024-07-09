function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 let messageSplit = message.split(" ");
 let countOfWords = messageSplit.length;
 let totalPrice = countOfWords * pricePerWord;
   return totalPrice;
   
console.log(messageSplit)
    // Change code above this line
 }

//  console.log(calculateEngravingPrice('Web-development is creative work', 40));
//  console.log(calculateEngravingPrice('JavaScript is in my blood', 20));


 function slugify(title) {
 

   return  title.toLowerCase().split(" ").join("-");
   




  }
console.log(slugify('How to become a JUNIOR developer for TWO WEEKS'))

