'use strict';

let height = +prompt("Какой высоты будет елочка ?");

const star = '**';
const space = ' ';

let lineSpace,
    line = '*',
    result = '',
    starCounter = 1,
    spaceWidth = height;

for (let i = 1; i <= height; i++) {
    lineSpace = '';
    spaceWidth--;

    for ( let k = 0; k < spaceWidth; k++ ){
        lineSpace += space;
    }

    result += lineSpace;

    if (starCounter === i && starCounter !== 1) {
        line += star;
    }

    result += line + '\n';
    starCounter++;

}
alert(result);