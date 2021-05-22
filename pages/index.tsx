import Head from "next/head";
import {Nav} from "../components/nav";

import styles from "../styles/sort.module.scss";
import {NAME, SortDefault} from "../config/config";

export default function BubblePage() {
    return <div>
        <Head>
            <title>{NAME} - Algorithm Visualizer</title>
        </Head>
        <Nav/>
        <div className={styles.cardDiv}>
            
        </div>

        <br/>
        <br/>
    </div>;
}
