export function helloTest(): true { return true; }

type List = {
    value: number;
    rest: List | null;
}

type Array = number[]

/**
 * build up a list structure like the one shown when given [1, 2, 3] as argument.
 * @param array 
 */
export function arrayToList(array: number[]): List| null {
    let beforeObj: List | null = null
    let afterObj: List | null = null
    const arrayLength = array.length

    if (arrayLength == 1) {
        return { value: array[0], rest: null }
    } else if (arrayLength == 0) {
        return null
    } else {
        for (let index = arrayLength - 1; index >= 0; index -= 1) { 
            if (index == arrayLength - 1) {
                afterObj = { value: array[index], rest: null };
                continue;
            } else {
                beforeObj = { value: array[index], rest: afterObj };
                afterObj = beforeObj;
            }
        }
    }
    return afterObj;
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
// function nth(list, index) {
//     let value = undefined;
//     let currentNode = list;
//     let counter = 0;
//     while (true) {
//         if (counter == index) {
//             value = currentNode["value"];
//             break;
//         } else if (currentNode["rest"] == null) {
//             break;
//         } else {
//             currentNode = currentNode["rest"];
//             counter += 1;
//         }
//     }
//     return value;
// }

// function nth_recursive(list, index) {
    
//     function nth_recursive_internal(list, counter) {
//         if (list["rest"] == null) {
//             return undefined;
//         } else if (counter == index) {
//             return list["value"];
//         } else {
//             counter += 1;
//             return nth_recursive_internal(list["rest"], counter);
//         }
//     }
//     return nth_recursive_internal(list, 0);
// }


// let array = [1, 2, 3, 4, 5];
// console.log('array: ', array);
// console.log();

// let list = arrayToList(array);
// console.log('list: ', list);
// console.log();

// let array_converted_to_list = listToArray(list);
// console.log('array_converted_to_list: ', array_converted_to_list);
// console.log();

// let list_prepended = prepend(0, list);
// console.log('list_prepended: ', list_prepended);
// console.log();

// let list_prepended_converted_to_array = listToArray(list_prepended);
// console.log('list_prepended_converted_to_array: ', list_prepended_converted_to_array);
// console.log();

// console.log('list: ', list);
// console.log();

// console.log('the third element of list: ', nth(list, 2));
// console.log();

// console.log('the third element of list(recursive): ', nth_recursive(list, 2));
// console.log();