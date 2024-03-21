import { useRecoilValue } from "recoil";
import {
    BasicInformation,
    CreditInformation,
    DetailInformation,
    LogoInformation,
    VideoInformation,
} from "../global/projectCommon";
import { Helmet } from "react-helmet";
import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { goToTop, imagePathGenerator } from "../utils";
import Summary from "../components/banner/Summary";
import { PlayButton } from "../components/banner/style";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";

export default function Detail() {
    const basic = useRecoilValue(BasicInformation);
    const detail = useRecoilValue(DetailInformation);
    const credit = useRecoilValue(CreditInformation);
    const video = useRecoilValue(VideoInformation);
    const logo = useRecoilValue(LogoInformation);

    let logoPath = "";

    console.log("Basic");
    console.log(basic);
    console.log("detail");
    console.log(detail);
    console.log("credit");
    console.log(credit);
    console.log("video");
    console.log(video);

    function actorsParser(): string {
        const temp = credit.cast.slice(0, 10).map((actor: any) => actor.name);
        const names = temp.join(", ");
        return names.slice(0, 90) + " ...";
    }

    function genresParser(): string {
        const temp = detail.genres.slice(0, 10).map((genre: any) => genre.name);
        const genres = temp.join(", ");
        return genres.slice(0, 90) + " ...";
    }

    function getLogoImage() {
        const logos = logo.filter((l: any) => l.iso_639_1 === "en");
        logoPath = logos.length > 0 ? logos[0].file_path : "";
    }

    useEffect(() => {
        goToTop();
    }, []);
    getLogoImage();

    return (
        <>
            <Helmet>
                <title>
                    쿠팡플레이 -{" "}
                    {basic.title || basic.name || "와우회원은 무료!"}
                </title>
            </Helmet>
            <Box
                w="100%"
                h="100vh"
                bgSize="cover"
                bgPosition="top center"
                bgImage={`url(${imagePathGenerator(
                    basic.backdrop_path || basic.poster_path,
                    "original"
                )})`}
                position="relative"
            >
                <VStack
                    w="50%"
                    h="50%"
                    alignItems="flex-start"
                    justifyContent="center"
                    position="absolute"
                    left="40px"
                    top="20%"
                >
                    {logoPath ? (
                        <Image
                            w="400px"
                            src={imagePathGenerator(logoPath, "original")}
                            objectFit="cover"
                        />
                    ) : (
                        <Text
                            fontWeight="bold"
                            fontSize="60px"
                            textAlign="left"
                        >
                            {basic.title || basic.name}
                        </Text>
                    )}
                    <Summary
                        runtime={detail.runtime}
                        score={detail.vote_average}
                        genre={detail.genres[0].name || "영화"}
                    />
                    <HStack>
                        <PlayButton
                            layoutId={`detail_${basic.title || basic.name}`}
                            // onClick={modalOpen}
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
                    </HStack>
                    <Text my="20px" fontWeight="bold" fontSize="30px">
                        {detail.overview.slice(0, 130)}...
                    </Text>
                    <HStack
                        fontWeight="bold"
                        fontSize="18px"
                        color="rgba(255, 255, 255, 0.8)"
                    >
                        <Text mr="50px">출연</Text>
                        <Text>{actorsParser()}</Text>
                    </HStack>
                    <HStack
                        fontWeight="bold"
                        fontSize="18px"
                        color="rgba(255, 255, 255, 0.8)"
                    >
                        <Text mr="50px">장르</Text>
                        <Text>{genresParser()}</Text>
                    </HStack>
                </VStack>
            </Box>
        </>
    );
}
