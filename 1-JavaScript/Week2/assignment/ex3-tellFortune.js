// Function to randomly select an element from each array
function selectRandomly(arrays) {
  const randomeOption =arrays.map(array => array[Math.floor(Math.random() * array.length)]);
  return randomeOption;
}

// Function to tell the fortune
function tellFortune(numKidsArray, partnerNamesArray, locationsArray, jobTitlesArray) {
// Use the selectRandomly function to select values from the arrays
  const fortuneOptions = selectRandomly([numKidsArray, partnerNamesArray, locationsArray, jobTitlesArray]);

// Return the formatted string with the selected random values
  return `You will be a ${fortuneOptions[3]} in ${fortuneOptions[2]}, married to ${fortuneOptions[1]} with ${fortuneOptions[0]} kids.`;
}

function main() {

  const numKids = [`2`, `3`, `4`, `5`, `6`];
  const partnerNames = [`Alice`, `Bob`, `Charlie`, `Daisy`, `Eve`];
  const locations = [`New York`, `Paris`, `Tokyo`, `Amsterdam`, `Sydney`];
  const jobTitles = [`developer`, `designer`, `doctor`, `teacher`, `engineer`];

   console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
   console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
   console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}
  
  // // ! Do not change or remove the code below
 if (process.env.NODE_ENV !== 'test') {
   main();
 }