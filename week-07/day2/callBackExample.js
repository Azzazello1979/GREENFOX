const useCallback = (p) => {
   p('Chewing out a rhythm on my bubble gum');
   p('The sun is out and I want some');
   p('It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach');
};

const callBackFunction = (p) => {
  console.log(p);
};

useCallback(callBackFunction);
