function questionMark(str) {
    return str + "???";
}

const qmark = questionMark('Hello');
qmark;

const qmark1 = questionMark('what even')
qmark1;

function stringsTogether(str1, str2) {
    return str1 + " " + str2;
}

const tog1 = stringsTogether('oh', 'hi')
tog1;
const tog2 = stringsTogether('well', 'hello back')
tog2;

function minusThree(num1, num2, num3) {
    return num3 - num2 - num1;
}

const firstMinus = minusThree(10, 1, 2)
firstMinus;
const secondMinus = minusThree(2, 1, 10)
secondMinus;

function timesThree(str){
    return str + str + str;
}

const firstThree = timesThree("codeimmersives");
firstThree;
const secondThree = timesThree('is the best')
secondThree;

function returnRoot(num) {
    return Math.sqrt(num);
}

const return1 = returnRoot(16);
return1;
const return2 = returnRoot(4);
return2;
const return3 = returnRoot(9);
return3;
