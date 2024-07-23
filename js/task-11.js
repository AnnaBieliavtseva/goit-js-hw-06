// Task 1

function calculateEngravingPrice(message, pricePerWord) {

 let messageSplit = message.split(" ");
 let countOfWords = messageSplit.length;
 let totalPrice = countOfWords * pricePerWord;
   return totalPrice;
   
console.log(messageSplit)
    
 }

//  console.log(calculateEngravingPrice('Web-development is creative work', 40));
//  console.log(calculateEngravingPrice('JavaScript is in my blood', 20));


// Task 2 

function slugify(title) {
 

   return  title.toLowerCase().split(" ").join("-");
  

  }
// console.log(slugify('How to become a JUNIOR developer for TWO WEEKS'))


// Task 3
function calculateTotal(number) {

   let total = 0;
 for (i = 1; i <= number; i += 1) {
   total += i;
 }
 
 return total;
   
 }

//  console.log(calculateTotal(5))


// Task 4
 function calculateTotalPrice(order) {
  let total = 0;
  
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
  // console.log(order[i])
}

  
  return total;
}

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))


// Task 5

function findLongestWord(string) {
  
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


// Task 6

function createArrayOfNumbers(min, max) {
  const numbers = [];
 
for (let i = min; i <= max; i += 1) {
  numbers.push(i)
}
  
  return numbers;
}

// console.log(createArrayOfNumbers(1,5))



// Task 7

function filterArray(numbers, value) {
 
 let arr = []
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
 if (numbers[i] > value) {
   arr.push(numbers[i])
 }
}
return arr;
 
}

// console.log(filterArray([1,2,3,4,5,6,7], 4));


// Task 8

function includes(array, value) {
  
for (const signification of array){
  if (signification === value){
    return true;
  } 
  
  
} 
return false;

}

// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'))

// Task 9

function countProps(object) {
  let propCount = 0;

  let sum = [];
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    sum.push(key);
   
    propCount = sum.length;
  }
}
 
  return propCount;
}

// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// Task 10

function countTotalSalary(salaries) {
  let totalSalary = 0;
 

let values = Object.values(salaries);

for (const value of values) {
  totalSalary += value;
}
  
  return totalSalary;
}


// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))



// Task 11

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}



// console.log(hexColors);
// console.log(rgbColors);



// Task 12 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getProductPrice(productName) {
 
// for (const product of products) {
//   if (productName === product.name) {
//     return product.price
//   } 
// }
// return null;

// }


// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// Task 13

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let propValue = [];

// for (const product of products) {
//   const productKey = Object.keys(product);
//   const productValue = Object.values(product);
  
//   for (i = 0; i < products.length; i += 1) {
//     if (productKey[i] === propName) {
//       propValue.push(productValue[i])
//     }
//   }
// }
// return propValue;

// }


// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
let total = 0;
for (const product of products) {
 
  const productValue = Object.values(product);

  for (i = 0; i < products.length; i += 1) {
   
    if (productValue[i] === productName) {
      // console.log(productValue[i].price)
      total = product.price*product.quantity;
    }
  }
}
return total;

}




console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));