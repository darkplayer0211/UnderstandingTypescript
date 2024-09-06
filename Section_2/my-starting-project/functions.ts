function add(i1: number, i2: number): number {
    return i1 + i2;
}

function printResult(result: number): void {
    console.log("Result is " + result);
}

function addAndHandle(i1: number, i2:number, cb: (num: number) => void): void {
    const result = i1 + i2;
    return cb(i1 + i2);
}

console.log(printResult(add(2, 5))); // Cause undefined because of void function

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; -- ERROR -- Not a same function type
console.log(combineValues(5, 7));

let a = addAndHandle(3, 5, (result) => {
    console.log(result);
    return result;
});

console.log(a);