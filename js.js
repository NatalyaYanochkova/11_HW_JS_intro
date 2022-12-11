/*
Create function which receives 2 params, compares them and sends alert with
    text ‘a > b’, ‘a<b’, ‘a==b’’ or ‘a===b’.*/
function comparatorAB(a, b) {
    if (a > b) {
        alert('a > b');
    } else if (a < b) {
        alert('a < b');
    } else if (a === b) {
        alert('a === b');
    } else if (a == b) {
        alert('a==b');
    } else if (a === NaN) {
        alert('NaN :(')
    } else {
        alert('Nothing about ' + a + ' ' + b);
    }
}

function fun() {
    var a = +prompt('Input a'); //string ->number
    var b = +prompt('Input b');
    comparatorAB(a, b);
}

/*Create function which reads a string from prompt and prints to console ‘TRUE’ if it
    is a number and contains ‘0’ in the end. Try to call it from the button onclick event.*/
function fun1() {
    var value = prompt('Input number', 'number');
    if (value === '') {
        console.log('FALSE');
        return;
    }
    var valueNum = +value;
    if (valueNum === 0) {
        console.log('TRUE');
        return;
    }
    if (!valueNum) {
        console.log('FALSE');
    } else if (valueNum % 10 === 0) {
        console.log('TRUE');
    } else console.log('FALSE')
}

/*
Create a button, which shows alert with message n+1 with each click. First click
should show 1, the second 2, then 3, etc...*/
var k = 0;

function fun2() {
    k++;
    alert(k);
}

/*
Change the 3rd task and read initial value form prompt (1 is default if typed not
number)*/

var p;
function fun3() {
    if (p === undefined) {
        p = +prompt('Input number');
        if (p) {
            p = p + 1;
            alert(p);
        } else {
            p = 1;
            alert(p);
        }
    } else {
        p = p+1;
        alert(p);
    }
}