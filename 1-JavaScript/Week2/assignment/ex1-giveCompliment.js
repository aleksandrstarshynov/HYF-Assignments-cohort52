export function giveCompliment(name) {
  const compliments = [ "Great", "Awesome", "Fantastic", "Brilliant", "Amazing", "Incredible", "Superb", "Excellent", "Outstanding", "Impressive"];
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return `You are ${compliments[randomIndex]}, ${name}!`;
}


 function main() {
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Oleksandr';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

 // ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
   main();
 }
