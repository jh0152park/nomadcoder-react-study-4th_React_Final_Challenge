import { Center, Heading, Image, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const naviage = useNavigate();
    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - Page Not Found</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack>
                    <Image
                        w="300px"
                        src="/resources/images/common/logo.webp"
                        mb="50px"
                    />
                    <Heading>404 Page Not Found</Heading>
                    <Heading
                        _hover={{
                            background:
                                "linear-gradient(to right top, rgb(255, 147, 242), rgb(97, 208, 255))",
                            cursor: "pointer",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                        }}
                        transition="all 0.2s linear"
                        onClick={() => naviage("/")}
                    >
                        Click to Home
                    </Heading>
                </VStack>
            </Center>
        </>
    );
}
