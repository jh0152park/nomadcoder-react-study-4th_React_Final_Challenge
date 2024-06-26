import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AnimatePresence, useScroll } from "framer-motion";
import { useSuspenseQueries } from "@tanstack/react-query";
import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { imagePathGenerator } from "../../utils";
import { TVHandlerAPI } from "../../global/api";
import {
    BannerDetail,
    MainBannerImageVariants,
    MainImageBox,
    Overlay,
    PlayButton,
} from "./style";
import { ITVResult } from "../../global/apiResponse";

import Summary from "./Summary";
import React from "react";
import YouTube from "react-youtube";

interface IBannerProps {
    tvResults: ITVResult[];
}

function TVBanner({ tvResults }: IBannerProps) {
    const { scrollY } = useScroll();
    const tvAPI = new TVHandlerAPI();

    const [endIndex, setEndIndex] = useState(1);
    const [startIndex, setStartIndex] = useState(0);

    const [moving, setMoving] = useState(false);
    const [direction, setDirection] = useState(1);

    const [playButton, setPlayButton] = useState(false);

    const details = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: ["TVBannerDetails", data.id],
            queryFn: tvAPI.details,
            staleTime: Infinity,
        })),
    });
    const detailDatas = details.map((deail) => deail.data) as any;

    const videos = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: ["TVBannerVideos", data.id],
            queryFn: tvAPI.videos,
            staleTime: Infinity,
        })),
    });
    const videoDatas = videos.map((video) => video.data.results) as any;

    const images = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: [`TVBannerImages`, data.id],
            queryFn: tvAPI.images,
            staleTime: Infinity,
        })),
    });
    const logoDatas = images.map((image) => image.data.logos) as any;

    let logoPath = "";
    let videoKey = "";

    function onLeftClick() {
        if (moving) return;

        if (startIndex === 0) {
            setStartIndex(tvResults.length - 1);
            setEndIndex(tvResults.length);
        } else {
            setStartIndex((prev) => prev - 1);
            setEndIndex((prev) => prev - 1);
        }

        setMoving(true);
        setDirection(-1);
    }

    function onRightClick() {
        if (moving) return;

        setStartIndex((prev) => (prev === tvResults.length - 1 ? 0 : prev + 1));
        setEndIndex((prev) => (prev === tvResults.length ? 1 : prev + 1));

        setMoving(true);
        setDirection(1);
    }

    function onDotClick(index: number) {
        if (moving) return;
        if (index === startIndex) return;

        setStartIndex(index);
        setEndIndex(index + 1);

        if (index > startIndex) {
            // right
            setMoving(true);
            setDirection(1);
        } else {
            // left
            setMoving(true);
            setDirection(-1);
        }
    }

    function getVideoKey() {
        const youtube = videoDatas[startIndex].filter(
            (v: any) => v.site.toLowerCase() === "youtube"
        );
        const trailer = videoDatas[startIndex].filter(
            (v: any) => v.type.toLowerCase() === "trailer"
        );
        videoKey =
            trailer.length > 0
                ? trailer[0].key
                : youtube.length > 0
                ? youtube[0].key
                : "";
    }

    function getLogoImage() {
        const logos = logoDatas[startIndex].filter(
            (logo: any) => logo.iso_639_1 === "en"
        );
        logoPath = logos.length > 0 ? logos[0].file_path : "";
    }

    function modalOpen() {
        setPlayButton(true);
        document.body.style.overflow = "hidden";
    }

    function modalClose() {
        setPlayButton(false);
        document.body.style.overflow = "unset";
    }

    getVideoKey();
    getLogoImage();

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

            {!moving && (
                <HStack
                    w="100%"
                    h="50px"
                    position="absolute"
                    zIndex="99"
                    bottom="0"
                    justifyContent="center"
                    alignItems="center"
                    spacing="20px"
                >
                    {[...new Array(tvResults.length)].map((dot, i) => (
                        <Box
                            w="8px"
                            h="8px"
                            key={i}
                            borderRadius="50%"
                            bg={
                                startIndex === i
                                    ? "whitesmoke"
                                    : "rgb(57, 57, 57)"
                            }
                            _hover={{ cursor: "pointer" }}
                            onClick={() => onDotClick(i)}
                        />
                    ))}
                </HStack>
            )}

            <AnimatePresence
                initial={false}
                custom={direction}
                onExitComplete={() => setMoving(false)}
            >
                {tvResults?.slice(startIndex, endIndex).map((data) => (
                    <MainImageBox
                        key={data.name}
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
                            h="100%"
                            alignItems="flex-start"
                            justifyContent="center"
                            position="absolute"
                            left="80px"
                            top="0"
                            bottom="0"
                            my="auto"
                        >
                            {logoPath ? (
                                <Image
                                    w="350px"
                                    src={imagePathGenerator(
                                        logoPath,
                                        "original"
                                    )}
                                    objectFit="cover"
                                />
                            ) : (
                                <Text
                                    fontWeight="bold"
                                    fontSize="60px"
                                    textAlign="left"
                                >
                                    {data.name}
                                </Text>
                            )}
                            <Summary
                                runtime={
                                    detailDatas[startIndex]
                                        .episode_run_time[0] || 30
                                }
                                score={detailDatas[startIndex].vote_average}
                                genre={
                                    detailDatas[startIndex].genres[0].name ||
                                    "TV Show"
                                }
                            />
                            <PlayButton
                                layoutId={`mainTV_${data.id}`}
                                onClick={modalOpen}
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
                            </PlayButton>
                        </VStack>

                        {playButton && (
                            <AnimatePresence>
                                <Overlay onClick={modalClose}>
                                    <BannerDetail
                                        style={{
                                            top: scrollY.get() + 200,
                                        }}
                                        layoutId={`mainTV_${data.id}`}
                                        transition={{
                                            type: "tween",
                                        }}
                                    >
                                        {videoKey ? (
                                            <YouTube
                                                videoId={videoKey}
                                                opts={{
                                                    width: "1120",
                                                    height: "630",
                                                    playerVars: {
                                                        autoplay: 1,
                                                        rel: 0,
                                                        modestbranding: 1,
                                                    },
                                                }}
                                            />
                                        ) : (
                                            <Image
                                                w="100%"
                                                h="100%"
                                                src={imagePathGenerator(
                                                    data.backdrop_path ||
                                                        data.poster_path,
                                                    "original"
                                                )}
                                                objectFit="cover"
                                                borderRadius="10px"
                                            />
                                        )}
                                    </BannerDetail>
                                </Overlay>
                            </AnimatePresence>
                        )}
                    </MainImageBox>
                ))}
            </AnimatePresence>
        </Box>
    );
}

export default React.memo(TVBanner);
