const timeoutId = setTimeout(() => {
  console.log('Yeeey!'); // not going to run
}, 5000);

clearTimeout(timeoutId);

console.log(timeoutId);