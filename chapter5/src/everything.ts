function everyLoop(array: number[], predicateFunction: (x: number) => boolean): boolean {
    for (const element of array) {
        if (predicateFunction(element) == false) {
            return false;
        }
    }
    return true;
};


function everySome(array: number[], predicateFunction: (x: number) => boolean): boolean {
    return !array.some( x => {
        return !predicateFunction(x);
    });
};

function checkEven(x: number): boolean {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const arrayA = [2, 4, 6, 8, 10];
const arrayB = [2, 4, 7, 8, 10];

console.log("Testing everyLoop...");
console.log("Expected Result: true");
console.log(everyLoop(arrayA, checkEven));
console.log("Expected Result: false");
console.log(everyLoop(arrayB, checkEven));
console.log();

console.log("Testing everySome...");
console.log("Expected Result: true");
console.log(everySome(arrayA, checkEven));
console.log("Expected Result: false");
console.log(everySome(arrayB, checkEven));