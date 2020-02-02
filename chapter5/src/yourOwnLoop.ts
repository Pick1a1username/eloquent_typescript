/**
 * a higher-order function that provides something like a for loop statement.
 * @param value 
 * @param testFunction 
 * @param updateFunction 
 * @param bodyFunction 
 */
let loop = <T>(
    value: T,
    testFunction: (x: T) => boolean,
    updateFunction: (x: T) => T,
    bodyFunction: (x: T) => void
) => {
    while (testFunction(value) == true) {
        bodyFunction(value);
        value = updateFunction(value);
    }
}

loop<number>(3, n => n > 0, n => n - 1, console.log);