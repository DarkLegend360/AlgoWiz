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

    for(var i=0;i<arr.length;i++) {
        if(arr[i].Value==target) {
            arr[i].Color = "#fd79a8";
            let temp = makeCopy(arr);
            result.push({
                list:temp,
                why:`${arr[i].Value} == ${target}, Matched!`
            });
        } else {
            let temp = makeCopy(arr);
            temp[i].Color = "#c0deff";
            result.push({
                list:temp,
                why:`${arr[i].Value} != ${target}, Mismatch!`
            });
        }
    }
    result.push({
        list:makeCopy(arr),
        why:"Done"
    });
    return result;
}