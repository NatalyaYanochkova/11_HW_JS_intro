/*
Create function which receives 2 params, compares them and sends alert with
    text ‘a > b’, ‘a<b’, ‘a==b’’ or ‘a===b’.*/
let fun = function (a, b) {
    if (a > b) {
        alert('a > b');
    } else if (a < b) {
        alert('a < b');
    } else if (a === b) {
        alert('a === b');
    } else if (a == b) {
        alert('a==b')
    }
};
console.log(fun(3, 5));
console.log(fun(4, 4));
console.log(fun('4', 4));

/*Create function which reads a string from prompt and prints to console ‘TRUE’ if it
    is a number and contains ‘0’ in the end. Try to call it from the button onclick event.*/


let fun1 = function () {
    let num = prompt('Input number', 'number');
    let res = typeof (+num);

    if (res === 'number' && num % 10 === 0) {
        console.log('TRUE')
    } else console.log('FALSE')
}

/*
Create a button, which shows alert with message n+1 with each click. First click
should show 1, the second 2, then 3, etc...*/

let fun2 = function () {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }
}

/*
Change the 3rd task and read initial value form prompt (1 is default if typed not
number)*/

let fun3 = function () {
    let num = prompt('Input number under 5', '1');
    /*let res = typeof (num);
    if (res != 'number'){
        num = 1;
    } else*/
        for (num; num <= 5; num++) {
            alert(num);
    }
}