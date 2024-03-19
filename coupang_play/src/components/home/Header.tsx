import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, HStack, Icon, Image } from "@chakra-ui/react";

import {
    CATEGORIES,
    CATEGORIES_LINK,
    USER_NAME,
} from "../../global/projectCommon";
import CategoryButton from "./CategoryButton";

import { FaMagnifyingGlass } from "react-icons/fa6";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function Header() {
    const [y, setY] = useState(0);
    const navigate = useNavigate();
    const userName = useRecoilValue(USER_NAME);
    const [avatarHover, setAvatarHover] = useState(false);

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
            justifyContent="space-between"
        >
            <HStack>
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
            <HStack>
                <Icon
                    w="22px"
                    h="22px"
                    mr="20px"
                    as={FaMagnifyingGlass}
                    _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
                    transition="all 0.2s linear"
                />

                <HStack>
                    <Avatar
                        w="35px"
                        h="35px"
                        border="2px solid white"
                        _hover={{ cursor: "pointer" }}
                        name={userName}
                        onMouseOver={() => setAvatarHover((prev) => !prev)}
                        onMouseOut={() => setAvatarHover((prev) => !prev)}
                    />
                    <Icon
                        w="25px"
                        h="25px"
                        as={
                            avatarHover
                                ? MdOutlineKeyboardArrowUp
                                : MdOutlineKeyboardArrowDown
                        }
                        mr="30px"
                        _hover={{ cursor: "pointer" }}
                    />
                </HStack>
            </HStack>
        </HStack>
    );
}
