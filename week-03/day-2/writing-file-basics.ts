'use strict';
export{};

const fs = require('fs');

let fileContent :string = 'I can write';
fs.writeFileSync('message.txt', fileContent);

