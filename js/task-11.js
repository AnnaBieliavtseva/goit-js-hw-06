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
// console.log(slugify('How to become a JUNIOR developer for TWO WEEKS'))

function calculateTotal(number) {
  // Change code below this line
   let total = 0;
 for (i = 1; i <= number; i += 1) {
   total += i;
 }
 
 return total;
   // Change code above this line
 }

//  console.log(calculateTotal(5))



 function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
  // console.log(order[i])
}

  // Change code above this line
  return total;
}

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))




function findLongestWord(string) {
  // Change code below this line
let longestWord;
let stringSplit = string.split(" ");
let wordlength = 0;
  for (let i = 0; i < stringSplit.length; i += 1) {
    wordlength = stringSplit[1].length;
    console.log(wordlength)
    if (wordlength < stringSplit[i].length) {
      longestWord = stringSplit[i];
      return longestWord;
    }
}

  // Change code above this line
}


// console.log(findLongestWord('May the force be with you'))


function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i += 1) {
  numbers.push(i)
}
  // Change code above this line
  return numbers;
}

// console.log(createArrayOfNumbers(1,5))



function filterArray(numbers, value) {
  // Change code below this line
 let arr = []
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
 if (numbers[i] > value) {
   arr.push(numbers[i])
 }
}
return arr;
 // Change code above this line
}

console.log(filterArray([1,2,3,4,5,6,7], 4));


function includes(array, value) {
  // Change code below this line
for (const signification of array){
  if (signification === value){
    return true;
  } 
  
  
} 
return false;
  // Change code above this line
}

console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'))
