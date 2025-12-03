const first = (input: string) => {
  const lines = input.split("\n");

  let count = 0;
  for(const line of lines) {
    let sequence = line.split('').map(Number);
    let sortedSequence = sequence.concat().sort((a, b) => b - a);
    let highestNumber = sortedSequence[0];

    let indexOfHighestNumber = sequence.indexOf(highestNumber);
    if (indexOfHighestNumber === sequence.length - 1) {
      // pick second highest number from the rest of the sequence
      sortedSequence = sequence.concat().sort((a, b) => b - a).filter(number => number !== highestNumber);
      let secondHighestNumber = sortedSequence[0];
      indexOfHighestNumber = sequence.indexOf(secondHighestNumber);
      console.log(`Sequence starting with ${sequence.join('').slice(0,5)}... has highest number at the end, removing ${highestNumber} and picking ${secondHighestNumber}`);
      highestNumber = secondHighestNumber;
    }

    sequence.splice(0, indexOfHighestNumber + 1);

    sortedSequence = sequence.concat().sort((a, b) => b - a);
    let secondHighestNumber = sortedSequence[0];

    //console.log(line, highestNumber, secondHighestNumber);

    count += ((highestNumber * 10) + secondHighestNumber);
  }
  return count;
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  //console.log(input);

  const lines = input.split("\n");
  let count = 0;
  for(const line of lines) {
    let sequence = line.split('').map(Number);
    let flips = [];
    let lastFlippedIndex = 0;
    let lastSequenceLength = sequence.length;
    console.log(`Sequence: ${sequence.join('')}`);
    for(let i =0; i< 12; i++) {
      // We can only work on the sequence after the last number we flipped
      let sequenceToWorkOn;
      if(i == 0) {
        sequenceToWorkOn = sequence;
      } else {
        sequenceToWorkOn = sequence.concat().slice(lastFlippedIndex + (sequence.length - lastSequenceLength) + 1);
      }
      lastSequenceLength = sequenceToWorkOn.length;

      console.log(`Sequence to work on: ${sequenceToWorkOn.join('')}`);

      let sorted: number[] = [...new Set(sequenceToWorkOn)].toSorted().toReversed();
      let sortIndex =0;
      
      while (true) {
        // if(sortIndex > sorted.length - 1) {
        //   console.log(`We fucked up, sorted index is ${sortIndex} but sorted length is ${sorted.length}`);
        //   return;
        // }
        let highestNumber = sorted[sortIndex];
        if(highestNumber == undefined) {
          console.log(`We fucked up, highest number is undefined`);
          return;
        }
        // we need at least 12 numbers in the sequence
        console.log(`sequenceToWorkOn.indexOf(highestNumber): ${sequenceToWorkOn.indexOf(highestNumber)}`);
        console.log(`(12 - i - 1): ${12 - i - 1}`);
        console.log(`sequenceToWorkOn.indexOf(highestNumber) + (12 - i - 1): ${sequenceToWorkOn.indexOf(highestNumber) + (12 - i - 1)}`);
        console.log(`sequenceToWorkOn.length: ${sequenceToWorkOn.length}`);
        if(sequenceToWorkOn.indexOf(highestNumber) + (12 - i) > sequenceToWorkOn.length) {
          // we don't have enough numbers to flip after, so let's pick the next highest number
          console.log(`Highest number is ${highestNumber} at index ${sequenceToWorkOn.indexOf(highestNumber)} (/${sequenceToWorkOn.length}) but we need at least ${12 - i - 1} numbers to flip after, so let's pick the next highest number`);
          sortIndex++;
          continue;
        }
        // we found our number!
        console.log(`Found highest number ${highestNumber} at index ${sequenceToWorkOn.indexOf(highestNumber)}, ${i}/12`);
        flips.push(highestNumber);
        lastFlippedIndex = sequenceToWorkOn.indexOf(highestNumber);
        break;
      }
    }

    count += parseInt(flips.join('').toString());
    console.log(line, flips.join(''));
  }
  return count;
};

const expectedSecondSolution = "solution 2";

export { expectedFirstSolution, expectedSecondSolution, first, second };
