import { HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES, CATEGORIES_LINK } from "../../global/projectCommon";
import CategoryButton from "./CategoryButton";

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
            px="48px"
            top={0}
            zIndex={99}
            position="fixed"
            bg={y > 200 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)"}
            transition="all 0.4s linear"
        >
            <Image
                w="32px"
                mr="20px"
                src="/resources/images/common/small_logo.webp"
                objectFit="cover"
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate("/home/movies")}
            />
            {CATEGORIES.map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                    url={CATEGORIES_LINK.get(category)!}
                />
            ))}
        </HStack>
    );
}
