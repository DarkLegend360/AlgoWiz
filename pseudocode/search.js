export function binarySearchCode() {
    var arr=[];

	arr.push("while leftIdx <= rightIdx");
    arr.push(Array(5).fill('\xa0').join('')+"    midIndex = (leftIdx + rightIdx)/2");
    arr.push(Array(5).fill('\xa0').join('')+"    if (item == arr[midIndex] )");
    arr.push(Array(10).fill('\xa0').join('')+"        return midIndex");
    arr.push(Array(5).fill('\xa0').join('')+"    else if (item > arr[midIndex] ) ");
    arr.push(Array(10).fill('\xa0').join('')+"        leftIdx = midIndex + 1");
    arr.push(Array(5).fill('\xa0').join('')+"    else");
    arr.push(Array(10).fill('\xa0').join('')+"        rightIdx = midIndex - 1");
    return arr;
}

export function linearSearchCode() {
    var arr=[];
    arr.push("loop until end of array");
    arr.push("  if ( arrray[idx] == target )");
    arr.push(Array(5).fill('\xa0').join('')+"      display \"Element Found\" ");
    return arr;
}