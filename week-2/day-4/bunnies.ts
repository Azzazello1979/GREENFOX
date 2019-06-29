// Bunnies, they have 2 ears. Calculate total number of ears for n number of bunnies.

'use strict';

function earCursion(bunnies :number) :number{

    if (bunnies < 1){
      return 0;
    }
      return 2 + earCursion(bunnies -1);
      // do this: 2+     as many times as rec. is allowed to run (4 times)
      // 2+2+2+2+ 
  }
  
  console.log(earCursion(4));