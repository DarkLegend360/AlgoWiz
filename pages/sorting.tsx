import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import Head from "next/head";
import {Nav} from "../components/nav";

import styles from "../styles/sort.module.scss";
import {Button, IconButton, Tooltip, Typography} from "@material-ui/core";

import {ItemIterator, noBorder, OpenSans, Roboto} from "../helpers/helper";

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import {NAME, SortDefault} from "../config/config";
import ListInput from "../components/listInput";

import bubbleSort from "../algorithms/sort/bubble";
import selectionSort from "../algorithms/sort/selection";
import quickSort from "../algorithms/sort/quick";
import insertionSort from "../algorithms/sort/insertion";

import {bubbleSortCode, selectionSortCode, insertionSortCode, quickSortCode} from "../pseudocode/sort";

export default function SortPage() {
    const [items, setItems] = useState(SortDefault);
    const [iter, setIter] = useState(new ItemIterator([]));
    const [current, setCurrent] = useState([]);
    const [why, setWhy] = useState("");
    const [code, setCode] = useState([]);
    const [isSelection, setSelection] = useState(false);
    const [isQuick, setQuick] = useState(false);
    useEffect(() => {
        setCurrent(iter.current.list);
        setWhy(iter.current.why);
    }, [iter]);

    function onClickBind(f: () => void): () => void {
        return () => {
            f.bind(iter)();
            setCurrent(iter.current.list);
            setWhy(iter.current.why);
        };
    }
    function Legends() {
        return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",}} className={styles.legendInfo}>
            <div>Legend:</div>
            <div style={{display:"flex",flexDirection: "row",}}>
            <div style={{backgroundColor:"#c0deff",height:"20px",width:"20px",marginRight:"5px"}} />
            - Current Selection</div>
            {
                isSelection?<div style={{display:"flex",flexDirection: "row",}}>
                <div style={{backgroundColor:"#55efc4",height:"20px",width:"20px",marginRight:"5px"}} />
                - Current Min Element</div>:null
            }
            {
                isQuick?<div style={{display:"flex",flexDirection: "row",}}>
                <div style={{backgroundColor:"#55efc4",height:"20px",width:"20px",marginRight:"5px"}} />
                - Pivot Element</div>:null
            }
            <div style={{display:"flex",flexDirection: "row",}}>
            <div style={{backgroundColor:"#fd79a8",height:"20px",width:"20px",marginRight:"5px"}} />
            - Sorted Element</div>
        </div>
        )
    }
    var curMode=null;
    function fetchResult(name) {
        setSelection(false);
        setQuick(false);
        var result = [];
        curMode=name;
        if(name=="bubble"){
            result = bubbleSort(items);
            setCode(bubbleSortCode);
        }
        else if(name=="selection"){
            result = selectionSort(items);
            setCode(selectionSortCode);
            setSelection(true);
        }
        else if(name=="insertion"){
            result = insertionSort(items);
            setCode(insertionSortCode);
        }
        else if(name=="quick") {
            result = quickSort(items);
            setCode(quickSortCode);
            setQuick(true);
        }
        result = result.map(function (w) {
            return {
                list: w.list.map(function (x) {
                        return {n: x.Value, key: x.Key, color: x.Color};
                    }
                ),
                why: w.why
            };
        });
        setIter(new ItemIterator(result));
    }
    return <div>
        <Head>
            <title>{NAME} - Sorting Visualizing</title>
        </Head>
        <Nav/>
        <div className={styles.mainCards}>
            <div className={styles.cardInputDiv}>
                <ListInput default={SortDefault} onChange={setItems}/>

                <br/>

                <Button style={{...noBorder, marginLeft: "20px", marginTop:"20px"}} className={styles.sortButton} onClick={()=>fetchResult("bubble")}>
                    <Typography className={styles.sortButtonText}>
                        <b>Bubble Sort</b>
                    </Typography>
                </Button>

                <Button style={{...noBorder, marginLeft: "20px", marginTop:"20px"}} className={styles.sortButton} onClick={()=>fetchResult("selection")}>
                    <Typography className={styles.sortButtonText}>
                        <b>Selection Sort</b>
                    </Typography>
                </Button>

                <Button style={{...noBorder, marginLeft: "20px", marginTop:"20px"}} className={styles.sortButton} onClick={()=>fetchResult("insertion")}>
                    <Typography className={styles.sortButtonText}>
                        <b>Insertion Sort</b>
                    </Typography>
                </Button>

                <Button style={{...noBorder, marginLeft: "20px", marginTop:"20px"}} className={styles.sortButton} onClick={()=>fetchResult("quick")}>
                    <Typography className={styles.sortButtonText}>
                        <b>Quick Sort</b>
                    </Typography>
                </Button>
            </div>

            <div className={styles.cardDiv}>
                <FlipMove className={styles.resultDiv}>
                    {current ? current.map((e) =>
                        <div key={e.key} className={styles.resultItem} style={
                            {
                                height: String(5 + 1.1 * current.map(x => x.n).sort(
                                    (a, b) => a - b
                                ).indexOf(e.n)) + "rem",
                                backgroundColor: e.color,
                            }
                        }>
                            <Typography style={{...OpenSans}} className="text-center">
                                {e.n}
                            </Typography>
                        </div>) : null}
                </FlipMove>

                <div>
                    <Typography style={{...Roboto}} className="text-center">
                        {why}
                    </Typography>
                    <br/>
                </div>

                <div className={styles.navigation}>
                    <Tooltip title="Reset">
                        <IconButton style={{...noBorder, marginLeft: "10px"}} onClick={onClickBind(iter.start)}>
                            <FirstPageIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Previous Step">
                        <IconButton style={{...noBorder, marginLeft: "10px"}} onClick={onClickBind(iter.back)}>
                            <NavigateBeforeIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Next Step">
                        <IconButton style={{...noBorder, marginLeft: "10px"}} onClick={onClickBind(iter.next)}>
                            <NavigateNextIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Last Step">
                        <IconButton style={{...noBorder, marginLeft: "10px"}} onClick={onClickBind(iter.end)}>
                            <LastPageIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
                <Legends />
            </div>
        </div>
        <div className={styles.codeInputDiv}>
            {
                code?code.map(item=> (
                        <div className={styles.codeTextStyle}>
                            <Typography className={styles.sortButtonText}>
                                <b>{item}</b>
                            </Typography>  
                        </div>
                    )
                ):null
            }
        </div>
        <br/>
        <br/>
    </div>;
}