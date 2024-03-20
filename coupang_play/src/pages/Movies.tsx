import { Box } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import HomeSkeleton from "../components/home/HomeSkeleton";

function Movies() {
    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>
            <HomeSkeleton />
            {/* <Box w="100%" h="200vh" /> */}
        </>
    );
}

export default React.memo(Movies);
