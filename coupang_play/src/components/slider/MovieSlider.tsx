import { useState } from "react";
import {
    IImageResponse,
    IMovieDetailsResponse,
    IMovieImagesResponse,
    IMovieResult,
    IVideoResult,
} from "../../global/apiResponse";
import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { Frames } from "./style";
import { SlideVariants } from "../../global/projectCommon";
import { backdropParser, imagePathGenerator } from "../../utils";
import { MovieHandlerAPI } from "../../global/api";
import { useSuspenseQueries } from "@tanstack/react-query";

interface IProps {
    title: string;
    movieResults: IMovieResult[];
}

export default function MovieSlider({ title, movieResults }: IProps) {
    const movieAPI = new MovieHandlerAPI();

    const [endIndex, setEndIndex] = useState(6);
    const [startIndex, setStartIndex] = useState(0);

    const [direction, setDirection] = useState(1);
    const [moving, setMoving] = useState(false);

    const details = useSuspenseQueries({
        queries: movieResults!.map((data) => ({
            queryKey: [`${title}_details`, data.id],
            queryFn: movieAPI.details,
            staleTime: Infinity,
        })),
    });
    const detailDatas: IMovieDetailsResponse[] = details.map(
        (deail) => deail.data
    ) as any;

    const videos = useSuspenseQueries({
        queries: movieResults!.map((data) => ({
            queryKey: [`${title}_videos`, data.id],
            queryFn: movieAPI.videos,
            staleTime: Infinity,
        })),
    });
    const videoDatas: IVideoResult[] = videos.map(
        (video) => video.data.results
    ) as any;

    const images = useSuspenseQueries({
        queries: movieResults!.map((data) => ({
            queryKey: [`${title}_images`, data.id],
            queryFn: movieAPI.images,
            staleTime: Infinity,
        })),
    });
    const imageDatas: IMovieImagesResponse[] = images.map(
        (image) => image.data.backdrops
    ) as any;

    console.log("image datas");
    console.log(imageDatas);

    function onLeftClick() {
        if (moving) return;

        switch (startIndex) {
            case 0:
                setStartIndex(12);
                setEndIndex(18);
                break;
            case 6:
                setStartIndex(0);
                setEndIndex(6);
                break;
            case 12:
                setStartIndex(6);
                setEndIndex(12);
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
                setStartIndex(6);
                setEndIndex(12);
                break;
            case 6:
                setStartIndex(12);
                setEndIndex(18);
                break;
            case 12:
                setStartIndex(0);
                setEndIndex(6);
                break;
            default:
                break;
        }
        setDirection(1);
        setMoving(true);
    }

    return (
        <Box w="100%" h="270px" position="relative" px="25px" mb="20px">
            <Icon
                as={IoIosArrowBack}
                w="40px"
                h="40px"
                color="white"
                position="absolute"
                top={0}
                bottom={0}
                my="auto"
                left="15px"
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
                right="15px"
                zIndex={99}
                _hover={{
                    cursor: "pointer",
                    transform: "scale(1.3)",
                }}
                transition="all 0.1s linear"
                onClick={onRightClick}
            />
            <Text fontWeight="bold" fontSize="20px" mb="15px" ml="25px">
                {title}
            </Text>

            <AnimatePresence
                initial={false}
                custom={direction}
                onExitComplete={() => setMoving(false)}
            >
                <Frames
                    key={`${title}_${startIndex}`}
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
                            <Box
                                key={index}
                                h="100%"
                                borderRadius="5px"
                                bgSize="cover"
                                bgPosition="top center"
                                bgImage={`url(${backdropParser(
                                    imageDatas[index + startIndex] as any,
                                    movie.backdrop_path,
                                    movie.poster_path
                                )})`}
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.2)",
                                    // top: "-15px",
                                    zIndex: "99",
                                }}
                                // position="relative"
                                transition="all 0.2s linear"
                            />
                        ))}
                </Frames>
            </AnimatePresence>
        </Box>
    );
}
