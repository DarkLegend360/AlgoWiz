export function binarySearchCode() {
    var arr=[];

	arr.push("While Left Index less than or equal to Right Index");
    arr.push(Array(5).fill('\xa0').join('')+"Set Middle Index as half of Left Index + Right Index ");
    arr.push(Array(5).fill('\xa0').join('')+"If Middle Index element is the Target");
    arr.push(Array(10).fill('\xa0').join('')+"Then return Middle Index as position of Target");
    arr.push(Array(5).fill('\xa0').join('')+"Otherwise If, Item is greater than Middle Index element");
    arr.push(Array(10).fill('\xa0').join('')+"Then update Left Index to Mid Index + 1");
    arr.push(Array(5).fill('\xa0').join('')+"If all above conditions false");
    arr.push(Array(10).fill('\xa0').join('')+"Then update Right Index to Mid Index - 1");
    return arr;
}

export function linearSearchCode() {
    var arr=[];
    arr.push("Repeat for each element of Array");
    arr.push("If current element is the target");
    arr.push(Array(5).fill('\xa0').join('')+"Display that element has been found");
    return arr;
}