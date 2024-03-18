import { VStack } from "@chakra-ui/react";
import React from "react";

import { Helmet } from "react-helmet";
import LoginBanner from "../components/home/LoginBanner";

function Home() {
    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>
            <VStack w="100%" minH="100vh">
                <LoginBanner />
            </VStack>
        </>
    );
}

export default React.memo(Home);
