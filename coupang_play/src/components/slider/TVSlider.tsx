import { useState } from "react";
import {
    IImageResponse,
    IMovieDetailsResponse,
    IMovieImagesResponse,
    IMovieResult,
    ITVResult,
    IVideoResult,
} from "../../global/apiResponse";
import { Box, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { Frames } from "./style";
import {
    BasicInformation,
    CreditInformation,
    DetailInformation,
    LogoInformation,
    SlideVariants,
    VideoInformation,
} from "../../global/projectCommon";
import { backdropParser, imagePathGenerator } from "../../utils";
import { MovieHandlerAPI, TVHandlerAPI } from "../../global/api";
import { useSuspenseQueries } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

interface IProps {
    title: string;
    tvResults: ITVResult[];
}

export default function TVSlider({ title, tvResults }: IProps) {
    const navigate = useNavigate();
    const tvAPI = new TVHandlerAPI();

    const [endIndex, setEndIndex] = useState(6);
    const [startIndex, setStartIndex] = useState(0);

    const [direction, setDirection] = useState(1);
    const [moving, setMoving] = useState(false);

    const details = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: [`${title}_details`, data.id],
            queryFn: tvAPI.details,
            staleTime: Infinity,
        })),
    });
    const detailDatas: IMovieDetailsResponse[] = details.map(
        (deail) => deail.data
    ) as any;

    const videos = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: [`${title}_videos`, data.id],
            queryFn: tvAPI.videos,
            staleTime: Infinity,
        })),
    });
    const videoDatas: IVideoResult[] = videos.map(
        (video) => video.data.results
    ) as any;

    const images = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: [`${title}_images`, data.id],
            queryFn: tvAPI.images,
            staleTime: Infinity,
        })),
    });
    const imageDatas: IMovieImagesResponse[] = images.map(
        (image) => image.data.backdrops
    ) as any;

    const logoDatas = images.map((image) => image.data.logos) as any;

    const credits = useSuspenseQueries({
        queries: tvResults!.map((data) => ({
            queryKey: [`${title}_credits`, data.id],
            queryFn: tvAPI.credits,
            staleTime: Infinity,
        })),
    });
    const creditDatas: IVideoResult[] = credits.map(
        (credit) => credit.data
    ) as any;

    const setBasic = useSetRecoilState(BasicInformation);
    const setDetail = useSetRecoilState(DetailInformation);
    const setCredit = useSetRecoilState(CreditInformation);
    const setVideo = useSetRecoilState(VideoInformation);
    const setLogo = useSetRecoilState(LogoInformation);

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

    function onTVClick(title: string, index: number) {
        setBasic(tvResults[index]);
        setDetail(detailDatas[index]);
        setCredit(creditDatas[index]);
        setVideo(videoDatas[index]);
        setLogo(logoDatas[index]);
        navigate(`/home/tv/${title}`);
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
                    {tvResults.slice(startIndex, endIndex).map((tv, index) => (
                        <Box
                            key={index + startIndex}
                            h="100%"
                            borderRadius="5px"
                            bgSize="cover"
                            bgPosition="top center"
                            bgImage={`url(${backdropParser(
                                imageDatas[index + startIndex] as any,
                                tv.backdrop_path,
                                tv.poster_path
                            )})`}
                            _hover={{
                                cursor: "pointer",
                                transform: "scale(1.2)",
                                // top: "-15px",
                                zIndex: "99",
                            }}
                            // position="relative"
                            transition="all 0.2s linear"
                            onClick={() =>
                                onTVClick(tv.name, index + startIndex)
                            }
                        />
                    ))}
                </Frames>
            </AnimatePresence>
        </Box>
    );
}
