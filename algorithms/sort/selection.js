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

export default function selectionSort(arr) {
    arr = generateArray(arr);
    var result = [];
    //Starting Pos
    result.push({
        list:makeCopy(arr),
        why:"Starting Position"
    });
    for(var i=0;i<arr.length-1;i++) {
        var minIndex = i;
        for(var j=i+1;j<arr.length;j++) {
            if(arr[minIndex].Value>arr[j].Value) {
                minIndex=j;
                let temp = makeCopy(arr);
                temp[j].Color = "#c0deff";
                temp[i].Color = "#c0deff";
                temp[minIndex].Color = "#55efc4";
                result.push({
                    list:temp,
                    why:`${arr[minIndex].Value} > ${arr[j].Value}, Select ${arr[j].Value} as minElement!`
                });
            } else {
                let temp = makeCopy(arr);
                temp[j].Color = "#c0deff";
                temp[i].Color = "#c0deff";
                temp[minIndex].Color = "#55efc4";
                result.push({
                    list:temp,
                    why:`${arr[minIndex].Value} < ${arr[j].Value}, No Change!`
                });
            }
        }
        let temp = makeCopy(arr);
        temp[i].Color = "#55efc4";
        temp[minIndex].Color = "#55efc4";
        result.push({
            list:temp,
            why:`Iteration ${i+1} over!`
        });
        if(i!=minIndex) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
            let temp = makeCopy(arr);
            temp[i].Color = "#55efc4";
            temp[minIndex].Color = "#55efc4";
            result.push({
                list:temp,
                why:`flip ${arr[minIndex].Value} & ${arr[i].Value}!`
            });
        } else {
            result.push({
                list:makeCopy(arr),
                why:`No flip!`
            });
        }
        arr[i].Color="#fd79a8";
    }
    arr[arr.length-1].Color="#fd79a8";
    result.push({
        list:makeCopy(arr),
        why:"Done"
    });
    return result;
}