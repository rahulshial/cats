const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, dataFromFile) => {
    if (!error) {
      return functionToRunWhenThingsAreDone(dataFromFile);
    } else {
      return functionToRunWhenThingsAreDone(undefined);
    }
  });
};

const printOutCatBreed = (breedData) => {
  console.log('Return Value: ', breedData); // => print out details correctly.
};
module.exports = breedDetailsFromFile;