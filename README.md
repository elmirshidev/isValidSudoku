# @elmirshi.dev/isvalidsudoku

![Sudoku Puzzle](sudoku.png)

## Description

`@elmirshi.dev/isvalidsudoku` is a lightweight JavaScript library that provides a simple and efficient way to validate Sudoku puzzles.

## Features

- Validates Sudoku puzzles to ensure they adhere to the rules.
- Supports checking rows, columns, and groups (blocks) for validity.
- Easy to integrate into your JavaScript projects.



## Installation

To install the package, use the following command:

```bash
npm install "@elmirshi.dev/isvalidsudoku"

```




## Usage

Here's a quick example of how to use the package:

```bash
const { isValidSudoku } = require('@elmirshi.dev/isvalidsudoku');

const sudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];


const isValid = isValidSudoku(sudoku);
console.log(isValid); // Output: true


```