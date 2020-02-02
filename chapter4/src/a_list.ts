type List = {
    value: number;
    rest: List | null;
}

type Array = number[]

export class ZeroLengthArrayError extends Error {}

/**
 * build up a list structure like the one shown when given [1, 2, 3] as argument.
 * @param array 
 */
export function arrayToList(array: number[]): List | ZeroLengthArrayError {
    const arrayLength = array.length

    if (arrayLength == 1) return { value: array[0], rest: null }
    if (arrayLength == 0) return new ZeroLengthArrayError()

    let listedArray: List = {
        value: array[arrayLength - 1],
        rest: null
    }

    for (let index = arrayLength -2; index >= 0; index -= 1) {
        listedArray = {
            value: array[index],
            rest: listedArray
        }
    }

    return listedArray
}

/**
 * produce an array from a list
 * @param list 
 */
export function listToArray(list: List): Array {
    const array: Array = []
    let currentNode = list;
    while (true) {
        array.push(currentNode["value"]);
        if (currentNode["rest"] == null) break;
        currentNode = currentNode["rest"];
    }

    return array;
}

/**
 * take an element and a list and creates a new list that adds the element
 * to the front of the input list
 * @param element 
 * @param list 
 */
export function prepend(element: number, list: List): List {
    return { value: element, rest: list}
}

/**
 * take a list and a number and return the element at the given position in the list
 * (with zero referring to the first element) or undefined when there is no such element.
 * @param list 
 * @param index 
 */
export function nth(list: List, index: number): number | undefined {
    let value: number | undefined = undefined;
    let currentNode = list;
    let counter = 0;
    while (true) {
        if (counter == index) {
            value = currentNode["value"];
            break;
        } else if (currentNode["rest"] == null) {
            break;
        } else {
            currentNode = currentNode["rest"];
            counter += 1;
        }
    }
    return value;
}

/**
 * the recursive version of nth()
 * @param list 
 * @param index 
 */
export function nthRecursive(list: List, index: number): number | undefined {
    
    function nthRecursiveInternal(list: List, counter: number): number | undefined {
        if (list["rest"] == null) {
            return undefined;
        } else if (counter == index) {
            return list["value"];
        } else {
            counter += 1;
            return nthRecursiveInternal(list["rest"], counter);
        }
    }
    return nthRecursiveInternal(list, 0);
}