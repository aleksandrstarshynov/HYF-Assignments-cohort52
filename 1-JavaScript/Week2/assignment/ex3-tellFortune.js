function selectRandomly(name) {
  const randomElement = Math.floor(Math.random() * name.length)
  return randomElement;
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const Kids = numKids[selectRandomly(numKids)];
  const Partners = partnerNames[selectRandomly(partnerNames)];
  const Loc = locations[selectRandomly(locations)];
  const Titles = jobTitles[selectRandomly(jobTitles)];
  return `You will be a ${Titles} in ${Loc}, married to ${Partners} with ${Kids} kids.`
}

function main() {
  const numKids = [3, 5, 2, 4, 6];

  const partnerNames = ["Aleksandr", "Michael", "Dimitri", "John", "Tim"];

  const locations = ["Amsterdam", "Utrecht", "Rotterdam", "Den Haag", "Texel"];

  const jobTitles = ["programmer", "seller", "cook", "model", "engineer"];


  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}