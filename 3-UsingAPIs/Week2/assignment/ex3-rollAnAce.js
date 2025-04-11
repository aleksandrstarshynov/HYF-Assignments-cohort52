import { rollDie } from '../../helpers/pokerDiceRoller.js';
/** @import {DieFace} from "../../helpers/pokerDiceRoller.js" */

/**
 * Rolls a die until the desired value is rolled.
 * @param {DieFace} desiredValue
 * @returns {Promise<DieFace>}
 */
export async function rollDieUntil(desiredValue) {
  let result;

  while (true) {
    result = await rollDie();
    if (result === desiredValue) {
      return result;
    }
  }
}

async function main() {
  try {
    const result = await rollDieUntil('ACE');
    console.log('Resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
