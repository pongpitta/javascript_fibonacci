function fibonacci(nums) {

    let fib = [0, 1];
    let n = 1;
    let data = [n];

    for (let i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }

    return data;
}

console.log(fibonacci(10))

// Test //
const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const actual = fibonacci(10)

// Comparing //
console.log(JSON.stringify(expected) == JSON.stringify(actual))

// Exercise : 
// 1. เมื่อ function fibonacci ทำงานถูกต้องแล้ว คำสั่ง console.log(fibonacci(20)[20-1]) จะได้ค่าเป็นเท่าไร ?
console.log(fibonacci(20)[20 - 1])
