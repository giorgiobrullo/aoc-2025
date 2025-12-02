const hasRepeatingSequence = (str: string): boolean => {
  // Check if the sequence repeats exactly twice (first half equals second half)
  if (str.length % 2 !== 0) return false;
  const half = str.length / 2;
  return str.substring(0, half) === str.substring(half);
};

const hasRepeatingSequence2 = (str: string): boolean => {
  for(let i = 1; i <= str.length / 2; i++) {
    const pattern = str.substring(0, i);
    const repetitions = str.length / i;
    const reconstructed = pattern.repeat(repetitions);
    if (reconstructed === str) {
      return true;
    }
  }
  return false;
}

const first = (input: string) => {
  //console.log(input);
  const ranges = input.split(",").map((range) => range.split("-").map(Number));
  let count = 0;

  for (const range of ranges) {
    const [start, end] = range;
    for (let i = start; i <= end; i++) {
      //console.log(`${i}`);
      const stringNumber = i.toString();
      // check if the number is made up of a sequence repeating characters
      // e.g. 6464, 525525525 should be true, 1234567890 should be false
      if (hasRepeatingSequence(stringNumber)) {
        console.log(`${stringNumber} has repeating sequence`);
        count += i;
      }
    }
  }
  return count;
};

const expectedFirstSolution = 0;

const second = (input: string) => {
  //console.log(input);
  const ranges = input.split(",").map((range) => range.split("-").map(Number));
  let count = 0;

  for (const range of ranges) {
    const [start, end] = range;
    for (let i = start; i <= end; i++) {
      //console.log(`${i}`);
      const stringNumber = i.toString();
      // check if the number is made up of a sequence repeating characters
      // e.g. 6464, 525525525 should be true, 1234567890 should be false
      if (hasRepeatingSequence2(stringNumber)) {
        console.log(`${stringNumber} has repeating sequence`);
        count += i;
      }
    }
  }
  return count;
};

const expectedSecondSolution = "solution 2";

export { expectedFirstSolution, expectedSecondSolution, first, second };
