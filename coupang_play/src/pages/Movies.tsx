import { Box } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";

function Movies() {
    const entireDatas = useOutletContext();

    console.log(entireDatas);

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>
            <h1>Loading done!</h1>
            <Box w="100%" h="200vh" />
        </>
    );
}

export default React.memo(Movies);
