import { HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Header() {
    const [y, setY] = useState(0);
    function onScroll() {
        setY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    console.log(y);

    return (
        <HStack
            w="100%"
            h="85px"
            top={0}
            zIndex={99}
            position="fixed"
            bg={y > 200 ? "black" : "pink"}
            transition="all 0.4s linear"
        ></HStack>
    );
}
