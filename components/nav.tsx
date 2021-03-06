import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";

import styles from "../styles/nav.module.scss";
import {NAME} from "../config/config";
import {Pangolin} from "../helpers/helper";

import {BrowserView, MobileView,} from "react-device-detect";

export function Nav() {
    return (
        <AppBar position={"sticky"} color={"transparent"} className={styles.Nav}>
            <Toolbar>
                <Link href="/">
                    <a><Typography variant="h4"
                                   style={{
                                       paddingRight: "40px", fontWeight: "bold",
                                       ...Pangolin,
                                       color: "#ec5c5c"
                                   }}>
                        {NAME}
                    </Typography></a>
                </Link>

                <Link href="/sorting">
                    <a><Typography variant="h6" style={{paddingRight: "40px", ...Pangolin}}>
                        <BrowserView>
                            Sorting Visualization
                        </BrowserView>
                        <MobileView>
                            Sorting
                        </MobileView>
                    </Typography></a>
                </Link>
                <Link href="/searching">
                    <a><Typography variant="h6" style={{paddingRight: "40px", ...Pangolin}}>
                        <BrowserView>
                            Searching Visualization
                        </BrowserView>
                        <MobileView>
                            Searching
                        </MobileView>
                    </Typography></a>
                </Link>
            </Toolbar>
        </AppBar>
    );
}