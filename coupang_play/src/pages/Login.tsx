import React from "react";

import { Helmet } from "react-helmet";
import { VStack } from "@chakra-ui/react";

import QnA from "../components/login/QnA";
import AdBanner1 from "../components/login/AdBanner1";
import AdBanner2 from "../components/login/AdBanner2";
import TopShadow from "../components/login/TopShadow";
import LoginBanner from "../components/login/LoginBanner";

function Login() {
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

export default React.memo(Login);
