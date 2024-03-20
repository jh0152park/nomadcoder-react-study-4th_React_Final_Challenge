import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useSuspenseQueries } from "@tanstack/react-query";
import { Box, Center, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { imagePathGenerator } from "../../utils";
import { MovieHandlerAPI } from "../../global/api";
import { MainBannerImageVariants, MainImageBox } from "./style";
import { IMovieDetailsResponse, IMovieResult } from "../../global/apiResponse";

import Summary from "./Summary";

interface IBannerProps {
    movieResults: IMovieResult[];
}

export default function MovieBanner({ movieResults }: IBannerProps) {
    const movieAPI = new MovieHandlerAPI();

    const [nextIndex, setNextIndex] = useState(1);
    const [currentIndex, setCurretIndex] = useState(0);

    const [moving, setMoving] = useState(false);
    const [direction, setDirection] = useState(1);

    const details = useSuspenseQueries({
        queries: movieResults!.map((data) => ({
            queryKey: ["movieDetail", data.id],
            queryFn: movieAPI.details,
            staleTime: Infinity,
        })),
    });
    const detailDatas: IMovieDetailsResponse[] = details.map(
        (deail) => deail.data
    ) as any;

    function onLeftClick() {
        if (moving) return;

        if (currentIndex === 0) {
            setCurretIndex(movieResults.length - 1);
            setNextIndex(movieResults.length);
        } else {
            setCurretIndex((prev) => prev - 1);
            setNextIndex((prev) => prev - 1);
        }

        setMoving(true);
        setDirection(-1);
    }

    function onRightClick() {
        if (moving) return;

        if (nextIndex === movieResults.length) {
            setCurretIndex(0);
            setNextIndex(1);
        } else {
            setCurretIndex((prev) => prev + 1);
            setNextIndex((prev) => prev + 1);
        }

        setMoving(true);
        setDirection(1);
    }

    console.log(detailDatas);
    console.log(movieResults);

    return (
        <Box w="100%" h="685px" position="relative">
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

            <AnimatePresence
                initial={false}
                custom={direction}
                onExitComplete={() => setMoving(false)}
            >
                {movieResults?.slice(currentIndex, nextIndex).map((data) => (
                    <MainImageBox
                        key={data.title}
                        custom={direction}
                        variants={MainBannerImageVariants}
                        initial="start"
                        animate="end"
                        exit="exit"
                        bgphoto={imagePathGenerator(
                            data.backdrop_path || data.poster_path,
                            "original"
                        )}
                        transition={{
                            type: "tween",
                            duration: 1.5,
                        }}
                    >
                        <VStack
                            w="50%"
                            h="30%"
                            alignItems="flex-start"
                            mt="250px"
                            ml="80px"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize="60px"
                                textAlign="left"
                            >
                                {data.title}
                            </Text>
                            <Summary
                                runtime={detailDatas[currentIndex].runtime}
                                score={detailDatas[currentIndex].vote_average}
                                genre={
                                    detailDatas[currentIndex].genres[0].name ||
                                    "영화"
                                }
                            />
                            <Center
                                w="300px"
                                h="65px"
                                bg="rgb(18, 148, 244)"
                                borderRadius="5px"
                                _hover={{
                                    cursor: "pointer",
                                    bg: "rgb(11, 88, 163)",
                                }}
                                transition="all 0.1s linear"
                            >
                                <HStack>
                                    <Icon
                                        as={FaPlay}
                                        color="white"
                                        w="20px"
                                        h="20px"
                                    />
                                    <Text fontWeight="bold" fontSize="20px">
                                        재생하기
                                    </Text>
                                </HStack>
                            </Center>
                        </VStack>
                    </MainImageBox>
                ))}
            </AnimatePresence>
        </Box>
    );
}
