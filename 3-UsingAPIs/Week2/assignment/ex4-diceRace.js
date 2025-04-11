import { rollDie } from '../../helpers/pokerDiceRoller.js';
/** @import {DieFace} from "../../helpers/pokerDiceRoller.js" */

/**
 * Rolls five dice and waits for the first one to finish.
 * @returns {Promise<DieFace>} The result of the first die roll to finish.
 */
export async function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(() => rollDie());  
  return Promise.race(promises); 
}

async function main() {
  try {
    const result = await rollDice(); 
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

// We are using Promise.race() here in line 11. The logic if it is just to wait for the first promise in the array to resolve. 
// No metter either successfully or unsuccessfully. Once the first promise resolves, it "wins" and returns its result. 
// However, this does not mean that the rest of the promises in the array will stop. 
// No way to stop them as we found in the previous week. 
// So, Promise.race() does not cancel other promises, it just does not wait for them to resolve after one of them has already resolved.
