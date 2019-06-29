const printing = () => {
  console.log(1);
  setTimeout(() => { console.log(2); }, 5000);
  setTimeout(() => { console.log(3); }, 0);
  console.log(4);
};
printing();

// Output is 1, 4, 3, 2
