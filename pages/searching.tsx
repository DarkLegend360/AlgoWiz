import {useEffect, useState} from "react";
import FlipMove from "react-flip-move";
import Head from "next/head";
import {Nav} from "../components/nav";

import styles from "../styles/sort.module.scss";
import {Button, IconButton, Tooltip, Typography, TextField} from "@material-ui/core";

import {ItemIterator, noBorder, OpenSans, Roboto} from "../helpers/helper";

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import {NAME, SortDefault} from "../config/config";
import ListInput from "../components/listInput";

import linearSearch from "../algorithms/search/linear"
import binarySearch from "../algorithms/search/binary"

import {linearSearchCode, binarySearchCode} from "../pseudocode/search";

export default function SearchPage() {
    const [items, setItems] = useState(SortDefault);
    const [iter, setIter] = useState(new ItemIterator([]));
    const [target, setTarget] = useState(5);
    const [current, setCurrent] = useState([]);
    const [why, setWhy] = useState("");
    const [code, setCode] = useState([]);

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

    function fetchResult(name) {
        var result = [];
        setTarget(5);
        if(name=="linear"){
            result = linearSearch(items, target);
            setCode(linearSearchCode);
        }
        else if(name=="binary"){
            result = binarySearch(items, target);
            setCode(binarySearchCode);
        }
        console.log(result);

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
            <title>{NAME} - Searching Visualizing</title>
        </Head>
        <Nav/>
        <div className={styles.mainCards}>
        <div className={styles.cardInputDiv}>
        <TextField id="filled-basic" 
            color="primary" 
            label="Target Element" 
            variant="filled" 
            size="small" 
            value={`${target}`} 
            onChange={(e)=>setTarget(Number(e.target.value))} 
        />
            <ListInput default={SortDefault} onChange={setItems}/>
            
            <br/>

            <Button style={{...noBorder}} className={styles.sortButton} onClick={()=>fetchResult("linear")}>
                <Typography className={styles.sortButtonText}>
                    <b>Linear Search</b>
                </Typography>
            </Button>

            <Button style={{...noBorder, marginLeft: "20px"}} className={styles.sortButton} onClick={()=>fetchResult("binary")}>
                <Typography className={styles.sortButtonText}>
                    <b>Binary Search</b>
                </Typography>
            </Button>
        </div>

        <div className={styles.cardDiv}>
            <FlipMove className={styles.resultDiv}>
                {current ? current.map((e) =>
                    <div key={e.key} className={styles.resultItem} style={
                        {
                            height: current.map(x => x.n) + "6rem",
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
