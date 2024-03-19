import React from "react";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>
            <h1>Here is home</h1>
        </>
    );
}

export default React.memo(Home);
