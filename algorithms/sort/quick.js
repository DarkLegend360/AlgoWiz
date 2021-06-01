function makeCopy(arr) {
    return arr.map((item)=>({
        Value: item.Value,
        Key: item.Key,
        Color: item.Color
    }));
}

function generateArray(arr) {
    return arr.map((ele,idx)=>({
        Value: ele,
        Key:   idx,
        Color: "#fce8d8",
    }));
}
var result = [];
var arr = [];

function quickSortHelper(arr, startIdx, endIdx) {
    if(startIdx>=endIdx) 
        return;
    var pivIdx=startIdx;
    arr[pivIdx].Color = "#55efc4";
    let temp = makeCopy(arr);
    result.push({
        list:temp,
        why:`Choosing ${arr[pivIdx].Value} at index ${pivIdx} as Pivot!`
    });
    var leftIdx=startIdx+1;
    var rightIdx=endIdx;
    while(leftIdx <= rightIdx) {
        if(arr[leftIdx].Value> arr[pivIdx].Value && arr[rightIdx].Value < arr[pivIdx].Value) {
            let temp = makeCopy(arr);
            temp[leftIdx].Color = "#c0deff";
            temp[rightIdx].Color = "#c0deff";
            result.push({
                list:temp,
                why:`Since ${arr[leftIdx].Value}(Left) >= ${arr[pivIdx].Value}(Pivot)<= ${arr[rightIdx].Value}(Right), flip ${arr[leftIdx].Value}(Left) & ${arr[rightIdx].Value}(Right)!`
            });
            [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
            temp = makeCopy(arr);
            temp[leftIdx].Color = "#c0deff";
            temp[rightIdx].Color = "#c0deff";
            result.push({
                list:temp,
                why:`flipped ${arr[leftIdx].Value}(Left) & ${arr[rightIdx].Value}(Right)!`
            });
        }
        console.log(arr[leftIdx], " ", arr[pivIdx]);
        if(arr[leftIdx].Value<=arr[pivIdx].Value) {
            let temp = makeCopy(arr);
            temp[leftIdx].Color = "#c0deff";
            temp[rightIdx].Color = "#c0deff";
            temp[pivIdx].Color = "#55efc4";
            result.push({
                list:temp,
                why:`Since ${arr[leftIdx].Value}(Left) <= ${arr[pivIdx].Value}(Pivot), Increment LeftIdx to Index ${leftIdx+1}!`
            });
            leftIdx++;
            if(leftIdx<arr.length) {
                temp = makeCopy(arr);
                temp[leftIdx].Color = "#c0deff";
                temp[rightIdx].Color = "#c0deff";
                temp[pivIdx].Color = "#55efc4";
                result.push({
                    list:temp,
                    why:`LeftIdx Incremented!`
                });
            }
        }
        if(arr[rightIdx].Value>= arr[pivIdx].Value) {
            let temp = makeCopy(arr);
            temp[leftIdx].Color = "#c0deff";
            temp[rightIdx].Color = "#c0deff";
            temp[pivIdx].Color = "#55efc4";
            result.push({
                list:temp,
                why:`Since ${arr[rightIdx].Value}(right) >= ${arr[pivIdx].Value}(Pivot), Decrementing rightIdx to Index ${rightIdx-1}!`
            });
            rightIdx--;
            if(rightIdx>=0) {
                temp = makeCopy(arr);
                temp[leftIdx].Color = "#c0deff";
                temp[rightIdx].Color = "#c0deff";
                temp[pivIdx].Color = "#55efc4";
                result.push({
                    list:temp,
                    why:`RightIdx decremented!`
                });
            }
        }
    }
    [arr[pivIdx], arr[rightIdx]] = [arr[rightIdx], arr[pivIdx]];
    arr[rightIdx].Color="#fd79a8";
    temp = makeCopy(arr);
    result.push({
        list:temp,
        why:`Swapping ${arr[rightIdx].Value}(Pivot) with its correct position ${arr[pivIdx].Value}!`
    });
    quickSortHelper(arr,startIdx,rightIdx-1);
    quickSortHelper(arr,rightIdx+1,endIdx);
}

export default function quickSort(inp) {
    //Starting Pos
    result = [];
    arr = generateArray(inp);
    result.push({
        list:makeCopy(arr),
        why:"Starting Position"
    });
    quickSortHelper(arr, 0, arr.length-1);
    for(let i=0;i<arr.length;i++)
        arr[i].Color="#fd79a8";
    result.push({
        list:makeCopy(arr),
        why:"Done"
    });
    return result;
}