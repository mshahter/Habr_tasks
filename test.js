function isPrime(n) {
    let counter = 0;
    if (n == 1) {
        console.log(false);
    }
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            counter++;
        }
    }
    if (counter > 2) {
        console.log(false);
    } else {
        console.log(true);
    }

}


function func(n) {
    return Math.pow(n, 2);
}


let arr = [4, 12, 0, 9];

function funcArr(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (n == i) {
            return arr[i];
        }
    }
    for (let i = arr.length - 1; i >= 0; i++) {
        if (n == i) {
            return arr[i];
        }
    }
}


class Fraction {
    constructor(m, n, znak) {

        if (znak == '+') {
            this.m = +m;
            this.n = n;
        } else if (znak == '-') {
            this.m = -1 * m;
            this.n = n;
        }
        if (this.m > this.n && this.m % this.n == 0) {
            this.m /= this.n;
            this.n = 1;
        } else if (this.m < this.n && this.m % this.n == 0) {
            this.n /= this.m;
            this.m = 1;
        } else {
            this.m = this.n = 1;
        }
        //let self = this;
    }
    getM() {
        return this.m;
    }
    getN() {
        return this.n;
    }
    sum(obj) {

        return (this.getM() * obj.getN() + this.getN() * obj.getM()) / (this.getN() * obj.getN());
    }
}

let a = new Fraction(20, 5, '+');
let b = new Fraction(12, 4, '+');

function fac(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
}
for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(100 * Math.random() - 50));
}


function isSorted(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                counter++;
            }
        }
    }
    if (counter == 0) {
        return true;
    } else {
        return false;
    }
}

function filter(arr, condition) {
    var filterArr = new Array();
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
}
console.log(filter([1, 2, 3, 4], n => n < 3));


function reverse(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    let f = a = b = 1;
    let arr = [];
    arr.push(a, b);
    for (let i = 2; i < n; i++) {
        f = a + b;
        b = a;
        a = f;
        arr.push(f);
    }
    return arr;
}

function indexOf(arr, ind) {
    if (ind > arr.length - 1 || ind < 0) {
        return -1;
    } else {
        return arr[ind];
    }
}

function reduce(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        n += arr[i];
    }
    return n;
}

function isPalindrom(str) {
    if (str == '') {
        return true;
    }
    let arr = str.split(' ');
    let string = arr.join('');
    let s = string.toLowerCase();
    let str1 = str2 = '';
    for (let i = 0; i < (s.length - 1) / 2; i++) {
        str1 += s[i];
    }
    for (let i = s.length - 1; i > (s.length - 1) / 2; i--) {
        str2 += s[i];
    }
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
}

function missing(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(i) == -1) {
            return i;
        } else {
            return undefined;
        }
    }
}
console.log(missing([5, 1, 4, 2]));

function isBalanced(str) {
    let left = right = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "[" || str[i] === "{") {
            left++;
        }
        if (str[i] === "]" || str[i] === "}") {
            right++;
        }
    }
    if (left == right) {
        return true;
    } else {
        return false;
    }
}