/**
 * a higher-order function that provides something like a for loop statement.
 * @param value 
 * @param testFunction 
 * @param updateFunction 
 * @param bodyFunction 
 */
function loop<T, U>(
    value: T,
    testFunction: (x: T) => boolean,
    updateFunction: (x: T) => T,  // This can be improved so that I don't need to specify generics' types manually.
    bodyFunction: (x: T) => U
): void {
    while (testFunction(value) == true) {
        bodyFunction(value);
        value = updateFunction(value);
    }
}

loop<number, void>(3, n => n > 0, n => n - 1, console.log);