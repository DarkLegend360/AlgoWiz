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

export default function insertionSort(arr) {
    arr = generateArray(arr);
    var result = [];
    //Starting Pos
    arr[0].Color="#fd79a8";
    result.push({
        list:makeCopy(arr),
        why:"Starting Position"
    });
    for(var i=1;i<arr.length;i++) {
        var j=i,key=arr[i].Value;
        for(;j>0 && arr[j-1].Value>key ;j--) {
            let temp = makeCopy(arr);
            temp[j].Color = "#c0deff";
            temp[j-1].Color = "#c0deff";
            result.push({
                list:temp,
                why:`${arr[j-1].Value} Overwrites ${arr[j].Value}, flip!`
            });
            arr[j].Value=arr[j-1].Value;
        }
        let temp = makeCopy(arr);
        result.push({
            list:temp,
            why:`${key} Overwrites ${arr[j].Value}, flip!`
        }); 
        arr[j].Value=key;
        for(let k=0;k<=i;k++)
            arr[k].Color = "#fd79a8";
        result.push({
            list:makeCopy(arr),
            why:`Iteration ${i+1} over!`
        });
    }
    result.push({
        list:makeCopy(arr),
        why:"Done"
    });
    console.log(arr);
    return result;
}