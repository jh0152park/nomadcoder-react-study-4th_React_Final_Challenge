import { Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function NotSupport() {
    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - Not Supported</title>
            </Helmet>
            <VStack
                w="100%"
                h="65vh"
                alignItems="center"
                justifyContent="center"
            >
                <Text mt="100px" fontSize="120px">
                    🫢
                </Text>
                <span
                    style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                        color: "transparent",
                        background:
                            "linear-gradient(to right top, rgb(255, 147, 242), rgb(97, 208, 255))",
                        WebkitBackgroundClip: "text",
                        textAlign: "center",
                    }}
                >
                    <p>OOPS!</p>
                    <p>This feature is currently not supported</p>
                    <p>Enjoy movies, TV, and favorite content</p>
                </span>
            </VStack>
        </>
    );
}
