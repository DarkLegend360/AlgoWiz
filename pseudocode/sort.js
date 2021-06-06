
export function bubbleSortCode() {
    var arr=[];
    arr.push(`Repeat the following steps n-1 times `);
    arr.push(Array(5).fill('\xa0').join('')+`  Repeat next 2 steps for all remaining elements`);
    arr.push(Array(10).fill('\xa0').join('')+`      Check if first element is bigger than the next`);
    arr.push(Array(15).fill('\xa0').join('')+`          If so swap, otherwise move to next number`);
    return arr;
}

export function selectionSortCode() {
    var arr=[];
    arr.push(`Repeat the following steps (n - 1) times`);
    arr.push(Array(5).fill('\xa0').join('')+`Set the first unsorted element index as the min`);
    arr.push(Array(5).fill('\xa0').join('')+` Repeat next 2 steps for each of the unsorted elements`);
    arr.push(Array(10).fill('\xa0').join('')+`    If element < currentMin`);
    arr.push(Array(15).fill('\xa0').join('')+`        Set element's index as new min`);
    arr.push(Array(5).fill('\xa0').join('')+`    Swap element at min with first unsorted position`);
    return arr;
}

export function insertionSortCode() {
    var arr=[];
    arr.push(`Consider 0th element as sorted part`);
    arr.push(`For each element from 2nd pos to n-1th pos, given as i`);
    arr.push(Array(5).fill('\xa0').join('')+`  Set Key = array[i]`);
    arr.push(Array(5).fill('\xa0').join('')+`  For each element from current pos to 0th pos, given as j`);
    arr.push(Array(10).fill('\xa0').join('')+`    If array[j]>Key`);
    arr.push(Array(15).fill('\xa0').join('')+`        Then right shift it by one position`);
    arr.push(Array(5).fill('\xa0').join('')+`  Overrite current j with Key`);
    return arr;
}
export function quickSortCode() {
    var arr=[];
    arr.push(` Input : Arr, start, end`);
    arr.push(Array(5).fill('\xa0').join('')+`If start >= end`);
    arr.push(Array(10).fill('\xa0').join('')+`    then done`);
    arr.push(Array(5).fill('\xa0').join('')+`Set pivot as start`);
    arr.push(Array(5).fill('\xa0').join('')+`Update left as start+1`);
    arr.push(Array(5).fill('\xa0').join('')+`Update right as end`);
    arr.push(Array(5).fill('\xa0').join('')+`While left is <= right do the following steps`);
    arr.push(Array(10).fill('\xa0').join('')+`If Arr[left] > Arr[piv] and Arr[piv] > Arr[right]`);
    arr.push(Array(15).fill('\xa0').join('')+`Then swap right and left elements of Arr`);
    arr.push(Array(10).fill('\xa0').join('')+`If Arr[left] <= Arr[piv]`);
    arr.push(Array(15).fill('\xa0').join('')+`Then increase left by 1`);
    arr.push(Array(10).fill('\xa0').join('')+`If Arr[piv] <= Arr[right]`);
    arr.push(Array(15).fill('\xa0').join('')+`Then decrease right by 1`);
    arr.push(Array(5).fill('\xa0').join('')+`Swap the pivot and right element of Arr`);
    arr.push(Array(5).fill('\xa0').join('')+`Perform above steps with Inputs : Arr, start, right-1`);
    arr.push(Array(5).fill('\xa0').join('')+`Perform above steps with Inputs : Arr, right+1, end`);
    return arr;
}