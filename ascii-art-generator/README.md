# ASCII-Art Generator

## General info

A small script that converts pictures into ASCII-art.

![javascript symbol](./img/javascript.png)

```text
       . . . . . . . . . . . . . . . . .
    o @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ o
    @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ # o # @ @ # o o # @ @ @ .
  . @ @ @ @ @ @ @ @ @ *   o @ O         o @ @ .
  . @ @ @ @ @ @ @ @ @ *   o @ .   * O   o @ @ .
  . @ @ @ @ @ @ @ @ @ *   o @ .   O @ @ @ @ @ .
  . @ @ @ @ @ @ @ @ @ *   o @ *     * # @ @ @ .
  . @ @ @ @ @ @ @ @ @ *   o @ @ °       * @ @ .
  . @ @ @ @ @ @ @ @ @ *   o @ @ @ # *     O @ .
  . @ @ @ @ @ @ @ @ @ *   o @ @ # @ @ *   * @ .
  . @ @ @ @ @ O   ° O .   O #     O O .   o @ .
  . @ @ @ @ @ #         . @ @ °         . @ @ .
    @ @ @ @ @ @ @ o * o @ @ @ @ # o * O @ @ @
    o @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ o
        . . . . . . . . . . . . . . . . .
```

## Basic Idea

The program takes a picture and checks the brightness of every pixel to replace the pixel with a ASCII character.

## How to use

Take the picture you want to asciify and put it in the img-folder. After that change the string in line 4 in the main.js file to the name of your picture then run the script.

## What i learned

- Basic image manipulation with javascript(Jimp)
- Writing text into a file using file-system from node
- Advanced my knowledge of colors(Android and grayscale(RGB))

## Log

- CamanJS seems outdated. Searched for a different package and found jimp
- Found out how to get pixeldata -> got it as Android-Color -> just .toString(16) transformed it to hexARGB
- After some reading of the documentation came across better functions for the purpose i need

## Technologies used

- Javascript
- node
- Jimp

## Idea from

- [https://robertheaton.com/2018/06/12/programming-projects-for-advanced-beginners-ascii-art/](https://robertheaton.com/2018/06/12/programming-projects-for-advanced-beginners-ascii-art/)
