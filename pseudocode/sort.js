
export function bubbleSortCode() {
    var arr=[];
    arr.push(`for i=0 to n-1`);
    arr.push(Array(5).fill('\xa0').join('')+`  for j=0 to n-i-2`);
    arr.push(Array(10).fill('\xa0').join('')+`      if arr[j]>arr[j+1]`);
    arr.push(Array(15).fill('\xa0').join('')+`          Swap arr[j] and arr[j+1]`);
    return arr;
}

export function selectionSortCode() {
    var arr=[];
    arr.push(`iterate (n - 1) times`);
    arr.push(Array(5).fill('\xa0').join('')+`set the first unsorted element index as the min`);
    arr.push(Array(5).fill('\xa0').join('')+`for each of the unsorted elements`);
    arr.push(Array(10).fill('\xa0').join('')+`    if element < currentMin`);
    arr.push(Array(15).fill('\xa0').join('')+`        set element's index as new min`);
    arr.push(Array(5).fill('\xa0').join('')+`    swap element at min with first unsorted position`);
    arr.push(`end selectionSort`);
    return arr;
}

export function insertionSortCode() {
    var arr=[];
    arr.push(`consider 0th element as sorted part`);
    arr.push(`for each element from i=2 to n-1`);
    arr.push(Array(5).fill('\xa0').join('')+`  tmp = arr[i]`);
    arr.push(Array(5).fill('\xa0').join('')+`  for j=i-1 to 0`);
    arr.push(Array(10).fill('\xa0').join('')+`    If a[j]>tmp`);
    arr.push(Array(15).fill('\xa0').join('')+`        Then right shift it by one position`);
    arr.push(Array(5).fill('\xa0').join('')+`  put tmp at current j`);
    return arr;
}
export function quickSortCode() {
    var arr=[];
    arr.push(`quickSort(arr, start, end)`);
    arr.push(Array(5).fill('\xa0').join('')+`if(start >= end)`);
    arr.push(Array(10).fill('\xa0').join('')+`    return`);
    arr.push(Array(5).fill('\xa0').join('')+`piv=start`);
    arr.push(Array(5).fill('\xa0').join('')+`left=start+1`);
    arr.push(Array(5).fill('\xa0').join('')+`right=end`);
    arr.push(Array(5).fill('\xa0').join('')+`while( left <= right )`);
    arr.push(Array(10).fill('\xa0').join('')+`    if((arr[left]>arr[piv]) && (arr[piv]>arr[right]))`);
    arr.push(Array(15).fill('\xa0').join('')+`        swap(arr[left],arr[right])`);
    arr.push(Array(10).fill('\xa0').join('')+`    if(arr[left]<=arr[piv])`);
    arr.push(Array(15).fill('\xa0').join('')+`        left++`);
    arr.push(Array(10).fill('\xa0').join('')+`    if(arr[piv]<=arr[right])`);
    arr.push(Array(15).fill('\xa0').join('')+`        right--`);
    arr.push(Array(5).fill('\xa0').join('')+`swap(arr[piv], arr[right]);`);
    arr.push(Array(5).fill('\xa0').join('')+`quickHelper(arr, start, right-1);`);
    arr.push(Array(5).fill('\xa0').join('')+`quickHelper(arr, right+1, end);`);
    return arr;
}