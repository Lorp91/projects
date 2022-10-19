# Sudoku-Solver

## General info

A script that solves [sudoku](https://de.wikipedia.org/wiki/Sudoku) puzzles automated without using a random approach.(solve like a human)

## Basic Idea

- Load the level 2dArray
- Add for each cell every possible number for the cell
- Determine with logic/deduction which number to write in the cell
- Repeat get possible numbers and solve until puzzle is finished

## How to use

- Add your puzzle in the levels.js object(there is also a template)
- Change the index in the main-function in main.js where the level is called

## What i learned

- 2dArrays
- translate human logic to code
- advanced sudoku solving techniques
- jump in code with js labels
- lots of forloops in different forms

## Log

- implemented basic logic to get the cells with just one possibility down and it was enough to solve easy puzzles
- medium puzzles dont work so implemented more logic how i would solve the puzzle to get it so medium worked
- hard puzzles wont work and the puzzles getting too hard for me too (i dont do sudoku puzzles) so i started looking up techniques for harder puzzles

## Technologies used

- Javascript

## Idea from

- research:
  - [advanced sudoku techniques 1](https://baileyspuzzles.com/advanced-sudoku-techniques/)
  - [advanced sudoku techniques 2](https://www.sudokuonline.io/tips/advanced-sudoku-strategies)
