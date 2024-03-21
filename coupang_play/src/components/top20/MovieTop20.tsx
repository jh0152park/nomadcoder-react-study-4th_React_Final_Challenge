import { Box, Text, Icon, HStack } from "@chakra-ui/react";
import { IMovieResult } from "../../global/apiResponse";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Frames } from "./style";
import { SlideVariants } from "../../global/projectCommon";
import RankPoster from "./RankPoster";
import { imagePathGenerator } from "../../utils";

interface IProps {
    movieResults: IMovieResult[];
}

export default function MovieTop20({ movieResults }: IProps) {
    const [endIndex, setEndIndex] = useState(7);
    const [startIndex, setStartIndex] = useState(0);

    const [direction, setDirection] = useState(1);
    const [moving, setMoving] = useState(false);

    function onLeftClick() {
        if (moving) return;

        switch (startIndex) {
            case 0:
                setStartIndex(13);
                setEndIndex(20);
                break;
            case 7:
                setStartIndex(0);
                setEndIndex(7);
                break;
            case 13:
                setStartIndex(7);
                setEndIndex(14);
                break;
            default:
                break;
        }
        setDirection(-1);
        setMoving(true);
    }

    function onRightClick() {
        if (moving) return;

        switch (startIndex) {
            case 0:
                setStartIndex(7);
                setEndIndex(14);
                break;
            case 7:
                setStartIndex(13);
                setEndIndex(20);
                break;
            case 13:
                setStartIndex(0);
                setEndIndex(7);
                break;
            default:
                break;
        }
        setDirection(1);
        setMoving(true);
    }

    return (
        <Box w="100%" h="250px" position="relative" px="25px">
            <Icon
                as={IoIosArrowBack}
                w="40px"
                h="40px"
                color="white"
                position="absolute"
                top={0}
                bottom={0}
                my="auto"
                left="20px"
                zIndex={99}
                _hover={{
                    cursor: "pointer",
                    transform: "scale(1.3)",
                }}
                transition="all 0.1s linear"
                onClick={onLeftClick}
            />
            <Icon
                as={IoIosArrowForward}
                w="40px"
                h="40px"
                color="white"
                position="absolute"
                top={0}
                bottom={0}
                my="auto"
                right="20px"
                zIndex={99}
                _hover={{
                    cursor: "pointer",
                    transform: "scale(1.3)",
                }}
                transition="all 0.1s linear"
                onClick={onRightClick}
            />
            <Text fontWeight="bold" fontSize="20px" mb="30px">
                이번 주 인기 영화 TOP 20
            </Text>

            <AnimatePresence
                initial={false}
                custom={direction}
                onExitComplete={() => setMoving(false)}
            >
                <Frames
                    key={startIndex}
                    variants={SlideVariants}
                    initial="start"
                    animate="end"
                    exit="exit"
                    custom={direction}
                    transition={{
                        type: "tween",
                        duration: 0.7,
                    }}
                >
                    {movieResults
                        .slice(startIndex, endIndex)
                        .map((movie, index) => (
                            <RankPoster
                                key={index}
                                rank={index + startIndex + 1}
                                poster={imagePathGenerator(
                                    movie.poster_path || movie.backdrop_path,
                                    "original"
                                )}
                            ></RankPoster>
                        ))}
                </Frames>
            </AnimatePresence>
        </Box>
    );
}