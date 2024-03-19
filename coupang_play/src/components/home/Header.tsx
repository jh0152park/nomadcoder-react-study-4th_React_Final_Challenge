import { HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [y, setY] = useState(0);
    const navigate = useNavigate();

    function onScroll() {
        setY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <HStack
            w="100%"
            h="70px"
            px="45px"
            top={0}
            zIndex={99}
            position="fixed"
            bg={y > 200 ? "black" : "pink"}
            transition="all 0.4s linear"
        >
            <Image
                w="35px"
                src="/resources/images/common/small_logo.webp"
                objectFit="cover"
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate("/home")}
            />
        </HStack>
    );
}
