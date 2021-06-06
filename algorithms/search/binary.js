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

export default function linearSearch(arr, target) {
    arr = generateArray(arr);
    var result = [];
    //Starting Pos
    result.push({
        list:makeCopy(arr),
        why:"Starting Position"
    });
    var leftIdx=0;
    var rightIdx=arr.length-1;
    var middleIdx=0;
    while(leftIdx<=rightIdx) {
        middleIdx = Math.floor(leftIdx+(rightIdx-leftIdx)/2);
        console.log(middleIdx);
        if(arr[middleIdx].Value==target) {
            let temp = makeCopy(arr);
            temp[leftIdx].Color="#c0deff";
            temp[rightIdx].Color="#c0deff";
            temp[middleIdx].Color = "#fd79a8";
            result.push({
                list:temp,
                why:`${arr[middleIdx].Value} == ${target}, Matched!`
            });
            break;
        } else if(arr[middleIdx].Value>target) {
            let temp = makeCopy(arr);
            temp[leftIdx].Color="#c0deff";
            temp[rightIdx].Color="#c0deff";
            temp[middleIdx].Color = "#55efc4";
            result.push({
                list:temp,
                why:`${arr[middleIdx].Value} > ${target}, Mismatch , Adjusting Right Bound!`
            });
            rightIdx=middleIdx-1;
        } else {
            let temp = makeCopy(arr);
            temp[leftIdx].Color="#c0deff";
            temp[rightIdx].Color="#c0deff";
            temp[middleIdx].Color = "#55efc4";
            result.push({
                list:temp,
                why:`${arr[middleIdx].Value} < ${target}, Mismatch , Adjusting Left Bound!`
            });
            leftIdx=middleIdx+1;
        }
    }
    if(arr[middleIdx].Value!=target) {
        result.push({
            list:makeCopy(arr),
            why:"Element was not found!"
        });
    }
    result.push({
        list:makeCopy(arr),
        why:"Done"
    });
    return result;
}