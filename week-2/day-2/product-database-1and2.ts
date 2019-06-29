'use strict';
export{};

const list:{[i:string]:number} = {

'Eggs' :	200,
'Milk' :	200,
'Fish' :	400,
'Apples' :	150,
'Bread' :	50,
'Chicken' :	550

};


/* 1.How much is the fish?
2.What is the most expensive product?
3.What is the average price?
4.How many products' price is below 300?
5.Is there anything we can buy for exactly 125?
6.What is the cheapest product? */


console.log('1.-- what is the price of the fish? -------------------------------------------------');
console.log(`The fish price is ${list['Fish']}`);




console.log('2.-- what is the most expenisve item? -------------------------------------------------');

Object.keys(list).forEach(x => 
    list[x] === Math.max(...Object.values(list)) ? 
    console.log(`The most expensive product is ${x} and the price is ${list[x]}`) : undefined
  );




console.log('3.-- what is the avg price? -------------------------------------------------');

  let average:number = 0;
  let arrayForPrices = Object.values(list);
  for (let i:number=0; i<arrayForPrices.length; i++){
    average = average + arrayForPrices[i];
  }
  console.log(`The average price is: ${average/arrayForPrices.length}`);






console.log('4.-- how many products price is below 300? -------------------------------------------------');

let below300:number = 0;
  for (let i:number=0; i<arrayForPrices.length; i++){
    arrayForPrices[i]<300 ? below300++ : undefined;
  }
  console.log(below300 + ' products are below 300');





console.log('5.-- Is there anything we can buy for exactly 125? -------------------------------------------------');

let exactly125:any;
for(let i:number=0;i<arrayForPrices.length;i++){
exactly125 = arrayForPrices[i]===125;
}
console.log(exactly125);




console.log('6.-- What is the cheapest product? -------------------------------------------------');

Object.keys(list).forEach(x => 
    list[x] === Math.min(...Object.values(list)) ? 
    console.log(`The cheapest product is ${x} and the price is ${list[x]}`) : undefined
  );




// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)

// USE MAP AS PARAMETER FOR A FUNCTION

function workingWithDatabase(map:{[i:string]:number}):void{

  let result1:string[] = [];
  let result2:string[] = [];

  Object.keys(map).forEach(e => {
    map[e] < 201 ? result1.push(e) : undefined;
    map[e] > 150 ? result2.push(e) : undefined
  }
  );
  console.log(`The products with price less than 201: ${result1} `);
  console.log(`The products with price more than 150: ${result2} `);
}

workingWithDatabase(list);





