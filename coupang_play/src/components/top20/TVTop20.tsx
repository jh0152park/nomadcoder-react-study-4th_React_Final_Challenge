import { Box, Text, Icon } from "@chakra-ui/react";
import {
    IMovieDetailsResponse,
    ITVResult,
    IVideoResult,
} from "../../global/apiResponse";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Frames } from "./style";
import { SlideVariants } from "../../global/projectCommon";
import RankPoster from "./RankPoster";
import { imagePathGenerator } from "../../utils";
import { useSuspenseQueries } from "@tanstack/react-query";
import { TVHandlerAPI } from "../../global/api";

interface IProps {
    tvResults: ITVResult[];
}

export default function TVTop20({ tvResults }: IProps) {
    const tvAPI = new TVHandlerAPI();

    const [endIndex, setEndIndex] = useState(7);
    const [startIndex, setStartIndex] = useState(0);

    const [direction, setDirection] = useState(1);
    const [moving, setMoving] = useState(false);

    const details = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: ["TVTop20Details", data.id],
            queryFn: tvAPI.details,
            staleTime: Infinity,
        })),
    });
    const detailDatas: IMovieDetailsResponse[] = details.map(
        (deail) => deail.data
    ) as any;

    const videos = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: ["TVTop20Videos", data.id],
            queryFn: tvAPI.videos,
            staleTime: Infinity,
        })),
    });
    const videoDatas: IVideoResult[] = videos.map(
        (video) => video.data.results
    ) as any;

    const credits = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: ["TVTop20Credits", data.id],
            queryFn: tvAPI.credits,
            staleTime: Infinity,
        })),
    });
    const creditDatas: IVideoResult[] = credits.map(
        (credit) => credit.data
    ) as any;

    const images = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: [`TVTop20Images`, data.id],
            queryFn: tvAPI.images,
            staleTime: Infinity,
        })),
    });
    const logoDatas = images.map((image) => image.data.logos) as any;

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
        <Box w="100%" h="250px" position="relative" px="25px" mb="20px">
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
            <Text fontWeight="bold" fontSize="20px" mb="30px" ml="25px">
                이번 주 인기 TV쇼 TOP 20
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
                    {tvResults.slice(startIndex, endIndex).map((tv, index) => (
                        <RankPoster
                            category="tv"
                            key={index + startIndex}
                            title={tv.name}
                            rank={index + startIndex + 1}
                            poster={imagePathGenerator(
                                tv.poster_path || tv.backdrop_path,
                                "300"
                            )}
                            newest={index + startIndex < 3}
                            monopoly={(index + startIndex + 1) % 5 === 0}
                            basic={tvResults[index + startIndex]}
                            detail={detailDatas[index + startIndex]}
                            credit={creditDatas[index + startIndex]}
                            video={videoDatas[index + startIndex]}
                            logo={logoDatas[index + startIndex]}
                        />
                    ))}
                </Frames>
            </AnimatePresence>
        </Box>
    );
}
