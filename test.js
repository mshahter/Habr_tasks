/*
 *      Tasks on js for FrontEnd interview. Tasks were taken from:      
 *      https://habr.com/company/ruvds/blog/334538/
 *      
 */

/*
 *   1. Задание: Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.
 *  
 *      isPrime(0)                          // false
 *      isPrime(1)                          // false
 *      isPrime(17)                         // true
 *      isPrime(10000000000000)             // false
 *  
 *      Решение:
 */


function isPrime(n) {
    let counter = 0;
    if (n == 1) {
        return false;
    }
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            counter++;
        }
    }
    if (counter > 2) {
        return false;
    } else {
        return true;
    }

}
console.log(isPrime(17)); //true;
/*
 *   2. Задача: Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
 *  
 *      factorial(0)                        // 1
 *      factorial(1)                        // 1
 *      factorial(6)                        // 720
 *  
 *      Решение:
 */

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6));

/*
 *   3. Задача: Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
 *  
 *      fib(0)                              // 0
 *      fib(1)                              // 1
 *      fib(10)                             // 55
 *      fib(20)                             // 6765
 *  
 *      Решение:
 */

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
console.log(fib(20));

/*
 *   4. Задача: Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
 *  
 *      isSorted([])                        // true
 *      isSorted([-Infinity, -5, 0, 3, 9])  // true
 *      isSorted([3, 9, -3, 10])            // false
 *  
 *      Решение:
 */

function isSorted(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
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
console.log(isSorted([-Infinity, -5, 0, 3, 9]));


/*
 *   5. Создайте собственную реализацию функции filter().
 *  
 *      filter([1, 2, 3, 4], n => n < 3)    // [1, 2]
 *  
 *      Решение:
 */


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

/*
 *   6. Создайте собственную реализацию функции reduce().
 *  
 *      reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10
 *  
 *      Решение:
 */

function reduce(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        n += arr[i];
    }
    return n;
}
console.log(reduce([1, 2, 3, 4], 5));
/*
 *   7. Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().
 *  
 *      reverse('')                         // ''
 *      reverse('abcdef')                   // 'fedcba'
 *      
 *      Решение:
 */

function reverse(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse('abcdef'));

/*
 *   8. Создайте собственную реализацию функции indexOf() для массивов.
 *  
 *      indexOf([1, 2, 3], 1)               // 0
 *      indexOf([1, 2, 3], 4)               // -1
 *      
 *      Решение:
 */


function indexOf(arr, ind) {
    if (ind > arr.length - 1 || ind < 0) {
        return -1;
    } else {
        return arr[ind];
    }
}
console.log(indexOf([1, 2, 3], 4));

/*
 *   9. Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, 
 *      является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
 *  
 *      isPalindrome('')                                // true
 *      isPalindrome('abcdcba')                         // true
 *      isPalindrome('abcd')                            // false
 *      isPalindrome('A man a plan a canal Panama')     // true
 *      
 *      Решение:
 */

function isPalindrome(str) {
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
console.log(isPalindrome('A man a plan a canal Panama'));

/*  
 *  10. Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, 
 *      числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. 
 *      Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
 *      Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть одна хорошая формула, которой вы можете воспользоваться.
 *  
 *      missing([])                         // undefined
 *      missing([1, 4, 3])                  // 2
 *      missing([2, 3, 4])                  // 1
 *      missing([5, 1, 4, 2])               // 3
 *      missing([1, 2, 3, 4])               // undefined
 *      
 *      Решение:
 *      Формула суммы арифмитической прогрессии: ((n * n) + n)/2;
 */

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


/*  
 *  11. Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
 *  
 *      isBalanced('}{')                      // false
 *      isBalanced('{{}')                     // false
 *      isBalanced('{}{}')                    // true
 *      isBalanced('foo { bar { baz } boo }') // true
 *      isBalanced('foo { bar { baz }')       // false
 *      isBalanced('foo { bar } }')           // false
 *      
 *      Решение:
 */

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
console.log(isBalanced('foo { bar } }'));