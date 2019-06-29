'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // use EJS templating
app.use('/static', express.static('static')); //serve static files from /static


const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];
const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];



app.get('/', (req, res) => {

  let request = req.query.alcohol
  if(request === undefined){ 
    res.render('home', {cocktails:cocktails, alcoholList:alcoholList}); // render the whole thing
  }else{
    let specifiedAlcoholArray = [];
    for(let i=0; i<cocktails.length; i++){
      cocktails[i].contains.includes(request) ? specifiedAlcoholArray.push(cocktails[i]) :null;
    };
    res.render('home', {cocktails:specifiedAlcoholArray, alcoholList:alcoholList}); // render only filtered list
  };
  
});



app.listen(PORT, () => console.log(`Cocktail server app listening on port ${PORT}`));
