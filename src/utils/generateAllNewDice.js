import { nanoid } from 'nanoid'

export function generateAllNewDice() {
  console.log('generate new dice function ran')
  return new Array(10).
    fill(0).
    map(() => (
        {
          value: Math.floor(Math.random() * 6 + 1),
          isHeld: false,
          id: nanoid(),
        }
      ));
    }
    