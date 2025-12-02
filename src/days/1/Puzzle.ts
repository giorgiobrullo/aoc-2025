const first = (input: string) => {
  let total = 50;

  let passwordCount = 0;
  for (const line of input.split("\n")) {
    const sign = line[0] == "R" ? 1 : -1;
    const value = parseInt(line.slice(1));

    total += sign * value;
    total = total % 100;
    if (total == 0) {
      passwordCount++;
    }
  }
  return passwordCount;
};

const expectedFirstSolution = "solution 1";

const second = (input: string) => {
  let total = 50;

  let passwordCount = 0;
  for (const line of input.split("\n")) {
    const sign = line[0] == "R" ? 1 : -1;
    const value = parseInt(line.slice(1));

    const prev_total = total;

    // Part 1
    total += sign * value;
    total = total % 100;
    // if (total == 0) {
    //   passwordCount++;
    // }

    // Part 2
    // We have hit zero at least once
    // Get our values when hitting zero, then just divide value by 100 to get the further numbers we hit zero

    console.log(`${prev_total} ${sign == 1 ? "+" : "-"}${value}`);

    let toHitZero;
    if (sign == 1) {
      if(prev_total > 0) toHitZero = Math.abs(100 - prev_total);
      else toHitZero = Math.abs(prev_total);
    }
    else {
      if(prev_total < 0) toHitZero = 100 - Math.abs(prev_total);
      else toHitZero = Math.abs(prev_total);
    }

    console.log(`toHitZero: ${toHitZero}`);

    const afterZero = value - toHitZero;
    console.log(`afterZero: ${afterZero}`);
    // Example -500, -500 - (-54),

    if(afterZero >= 0) {
      // We actually reached zero at least once
      if(prev_total !== 0){ passwordCount++; 
        console.log("We reached zero");
      }

      if(afterZero > 0) {
        const completeCycles = Math.abs(Math.floor(afterZero / 100));
        console.log(`completeCycles: ${completeCycles}`);
        passwordCount += completeCycles;
      }
    }
    else console.log("We did not reach zero");
  }
  return passwordCount;
};

const expectedSecondSolution = "solution 2";

export { expectedFirstSolution, expectedSecondSolution, first, second };
