const first = (input: string) => {
  // split file into 2d array
  const lines = input.split("\n");
  const grid = lines.map((line) => line.split(""));
  let accessibleCells = 0;

  while (true) {
    //let didChange = false;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == "@") {
          // Check 8 adiacent cells, count number that have @
          let count = 0;
          for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
              // -1 checks if we are not out of bounds and exclude current cell
              if (k == 0 && l == 0) continue;
              if (i + k >= 0 && i + k < grid.length && j + l >= 0 && j + l < grid[i].length && (grid[i + k][j + l] == "@" || grid[i + k][j + l] == "x")) {
                count++;
              }
            }
          }

          if (count < 4) {
            accessibleCells++;
            grid[i][j] = "x";
            //didChange = true;
          }
        }
      }
    }
    //if (!didChange) break;
    break;
  }

  // print grid 
  console.log(grid.map((row) => row.join("")).join("\n"));
  return accessibleCells;
};

const expectedFirstSolution = "solution 1";

const second = (input: string) => {
  // split file into 2d array
  const lines = input.split("\n");
  const grid = lines.map((line) => line.split(""));
  let accessibleCells = 0;

  while (true) {
    let didChange = false;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == "@") {
          // Check 8 adiacent cells, count number that have @
          let count = 0;
          for (let k = -1; k <= 1; k++) {
            for (let l = -1; l <= 1; l++) {
              // -1 checks if we are not out of bounds and exclude current cell
              if (k == 0 && l == 0) continue;
              if (i + k >= 0 && i + k < grid.length && j + l >= 0 && j + l < grid[i].length && grid[i + k][j + l] == "@") {
                count++;
              }
            }
          }

          if (count < 4) {
            accessibleCells++;
            grid[i][j] = "x";
            didChange = true;
          }
        }
      }
    }
    if (!didChange) break;
  }

  // print grid 
  console.log(grid.map((row) => row.join("")).join("\n"));
  return accessibleCells;
};
const expectedSecondSolution = "solution 2";

export { expectedFirstSolution, expectedSecondSolution, first, second };
