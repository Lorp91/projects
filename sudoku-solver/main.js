const levels = require("./levels");

let blocks = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 4],
    [2, 5],
  ],
  [
    [0, 6],
    [0, 7],
    [0, 8],
    [1, 6],
    [1, 7],
    [1, 8],
    [2, 6],
    [2, 7],
    [2, 8],
  ],
  [
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 0],
    [4, 1],
    [4, 2],
    [5, 0],
    [5, 1],
    [5, 2],
  ],
  [
    [3, 3],
    [3, 4],
    [3, 5],
    [4, 3],
    [4, 4],
    [4, 5],
    [5, 3],
    [5, 4],
    [5, 5],
  ],
  [
    [3, 6],
    [3, 7],
    [3, 8],
    [4, 6],
    [4, 7],
    [4, 8],
    [5, 6],
    [5, 7],
    [5, 8],
  ],
  [
    [6, 0],
    [6, 1],
    [6, 2],
    [7, 0],
    [7, 1],
    [7, 2],
    [8, 0],
    [8, 1],
    [8, 2],
  ],
  [
    [6, 3],
    [6, 4],
    [6, 5],
    [7, 3],
    [7, 4],
    [7, 5],
    [8, 3],
    [8, 4],
    [8, 5],
  ],
  [
    [6, 6],
    [6, 7],
    [6, 8],
    [7, 6],
    [7, 7],
    [7, 8],
    [8, 6],
    [8, 7],
    [8, 8],
  ],
];

function updateListOfPossibles(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (typeof arr[i][j][0] !== "undefined") {
        arr[i][j][1] = [];
        continue;
      }
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      // horizontal
      for (let h = 0; h < 9; h++) {
        if (typeof arr[i][h][0] !== "undefined") {
          let index = numbers.indexOf(arr[i][h][0]);
          if (index !== -1) {
            numbers.splice(index, 1);
          }
        }
      }

      // vertical
      for (let v = 0; v < 9; v++) {
        if (typeof arr[v][j][0] !== "undefined") {
          let index = numbers.indexOf(arr[v][j][0]);
          if (index !== -1) {
            numbers.splice(index, 1);
          }
        }
      }

      //--------------------------

      //  let iStart = Math.floor(i/3.1)*3
      //  let jStart = Math.floor(j/3.1)*3

      // block
      let verti;
      if (i < 3) {
        verti = 0;
      } else if (i > 2 && i < 6) {
        verti = 3;
      } else if (i > 5) {
        verti = 6;
      }
      let maxV = verti + 3;
      let hori;
      if (j < 3) {
        hori = 0;
      } else if (j > 2 && j < 6) {
        hori = 3;
      } else if (j > 5) {
        hori = 6;
      }
      let maxH = hori + 3;
      for (let x = verti; x < maxV; x++) {
        for (let y = hori; y < maxH; y++) {
          if (typeof arr[x][y][0] !== "undefined") {
            let index = numbers.indexOf(arr[x][y][0]);
            if (index !== -1) {
              numbers.splice(index, 1);
            }
          }
        }
      }

      arr[i][j][1] = [...numbers];
    }
  }
  return arr;
}

function solve(arr) {
  let trys = 100;
  let tryx = 0;
  start: while (!checkDone(arr)) {
    tryx++;
    if (tryx >= trys) break;

    arr = updateListOfPossibles(arr);

    // check obvious
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (arr[i][j][1].length === 1) {
          arr[i][j][0] = arr[i][j][1][0];
          arr[i][j][1] = [];
          continue start;
        }
      }
    }

    // check horizontal uniques
    for (let [i, row] of arr.entries()) {
      let allNotes = [];
      for (let j = 0; j < 9; j++) {
        if (typeof row[j][0] === "undefined") {
          allNotes.push(...row[j][1]);
        }
      }
      let uniques = getUniques(allNotes);
      if (uniques.length) {
        for (let uni in uniques) {
          for (let j = 0; j < 9; j++) {
            if (row[j][1].includes(uni)) {
              arr[i][j][0] = uni;
              arr[i][j][1] = [];
              continue start;
            }
          }
        }
      }
    }

    // check vertical uniques
    for (let i = 0; i < 9; i++) {
      let allNotes = [];
      for (let j = 0; j < 9; j++) {
        if (typeof arr[j][i][0] === "undefined") {
          allNotes.push(...arr[j][i][1]);
        }
      }
      let uniques = getUniques(allNotes);
      if (uniques.length) {
        for (let uni of uniques) {
          for (let j = 0; j < 9; j++) {
            if (arr[j][i][1].includes(uni)) {
              arr[j][i][0] = uni;
              arr[j][i][1] = [];
              continue start;
            }
          }
        }
      }
    }

    // check block uniques
    for (let block of blocks) {
      let allNotes = [];
      for (let [a, b] of block) {
        if (typeof arr[a][b][0] === "undefined") {
          allNotes.push(...arr[a][b][1]);
        }
      }
      let uniques = getUniques(allNotes);
      if (uniques.length) {
        for (let uni of uniques) {
          for (let [a, b] of block) {
            if (arr[a][b][1].includes(uni)) {
              arr[a][b][0] = uni;
              arr[a][b][1] = [];
              continue start;
            }
          }
        }
      }
    }
  }
  return arr;
}

function getUniques(arr) {
  let uniques = [];
  let ban = [];
  for (let num of arr) {
    if (ban.includes(num)) {
      continue;
    }
    if (uniques.includes(num)) {
      let index = uniques.indexOf(num);
      uniques.splice(index, 1);
      ban.push(num);
      continue;
    }
    uniques.push(num);
  }
  return uniques;
}

function checkDone(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (typeof arr[i][j][0] === "undefined") return false;
    }
  }
  return true;
}

function validate(arr) {
  // takes clean(without notes) arr
  let result = true;

  // horizontal
  arr.forEach((row) => {
    if (row.length !== 9) result = false;
    for (let i = 1; i <= 9; i++) {
      if (!row.includes(i)) result = false;
    }
  });
  if (!result) return false;

  // vertical
  for (let i = 0; i < 9; i++) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let j = 0; j < 9; j++) {
      let index = numbers.indexOf(arr[j][i]);
      if (index === -1) return false;
      numbers.splice(index, 1);
    }
    if (numbers.length) return false;
  }

  // blocks
  blocks.forEach((block) => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let [a, b] of block) {
      let index = numbers.indexOf(arr[a][b]);
      if (index === -1) result = false;
      numbers.splice(index, 1);
    }
    if (numbers.length) result = false;
  });
  if (!result) return false;

  return true;
}

function eraseNotes(arr) {
  // get numbers
  let onlyNumbers = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(arr[i][j][0]);
    }
    onlyNumbers.push(row);
  }
  return onlyNumbers;
}

function cleanLog(arr) {
  let onlyNumbers = eraseNotes(arr);
  let str = "╔═══════╦═══════╦═══════╗\n";
  onlyNumbers.forEach((row, i) => {
    if (i === 3 || i === 6) {
      str += `╠═══════╬═══════╬═══════╣\n`;
    }
    str += `║ ${row[0]} ${row[1]} ${row[2]} ║ ${row[3]} ${row[4]} ${row[5]} ║ ${row[6]} ${row[7]} ${row[8]} ║\n`;
  });
  str += `╚═══════╩═══════╩═══════╝`;
  console.log(str);
}

function main() {
  let level = levels.easy[0];
  // let level = levels.middle[0];
  let solved = solve(level);
  // console.table(solved);
  // console.log(validate(eraseNotes(solved)));
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (solved[i][j][1].length) console.log(`${i}/${j}: `, solved[i][j][1]);
  //   }
  // }
  cleanLog(solved);
}
main();
