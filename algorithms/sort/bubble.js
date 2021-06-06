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

export default function bubbleSort(arr) {
    arr = generateArray(arr);
    var result = [];
    //Starting Pos
    result.push({
        list:makeCopy(arr),
        why:"Starting Position",
        line:null
    });

    var swapped = true;
    var i=0;
    for(i=0;swapped;i++) {
        swapped=false;
        for(var j=0;j<arr.length-1-i;j++) {
            if(arr[j].Value > arr[j+1].Value) {
                let temp = makeCopy(arr);
                temp[j].Color = "#c0deff";
                temp[j+1].Color = "#c0deff";
                result.push({
                    list:temp,
                    why:`${arr[j+1].Value} > ${arr[j].Value}, !`,
                    line:2
                });
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
                temp = makeCopy(arr);
                temp[j].Color = "#c0deff";
                temp[j+1].Color = "#c0deff";
                result.push({
                    list:temp,
                    why:`Flip!`,
                    line:3
                });
                swapped=true;
            } else {
                let temp = makeCopy(arr);
                temp[j].Color = "#c0deff";
                temp[j+1].Color = "#c0deff";
                result.push({
                    list:temp,
                    why:`${arr[j].Value} <= ${arr[j+1].Value}, ignore!`,
                    line:2
                });
            }
        }
        arr[arr.length-1-i].Color="#fd79a8";
        result.push({
            list:makeCopy(arr),
            why:`Iteration ${i+1} over!`,
            line:null
        });
    }
    let temp = makeCopy(arr);
    for(i=0;i<arr.length;i++)
        temp[i].Color="#fd79a8";
    result.push({
        list:temp,
        why:"Nothing swapped, which means the array is sorted!",
        line:null
    });
    result.push({
        list:temp,
        why:"Done",
        line:null
    });
    return result;
}