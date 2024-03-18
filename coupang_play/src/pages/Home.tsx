import React from "react";

import { Helmet } from "react-helmet";
import { VStack } from "@chakra-ui/react";

import QnA from "../components/home/QnA";
import AdBanner1 from "../components/home/AdBanner1";
import AdBanner2 from "../components/home/AdBanner2";
import TopShadow from "../components/home/TopShadow";
import LoginBanner from "../components/home/LoginBanner";

function Home() {
    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>
            <VStack w="100%" minH="100vh" spacing="0" position="relative">
                <TopShadow />
                <LoginBanner />
                <AdBanner1 />
                <AdBanner2 />
                <QnA />
            </VStack>
        </>
    );
}

export default React.memo(Home);
