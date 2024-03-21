import { Box, Center, HStack, Image } from "@chakra-ui/react";
import MonopolyBadge from "./MonoplyBadge";
import NewestBadge from "./NewestBadge";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
    BasicInformation,
    CreditInformation,
    DetailInformation,
    LogoInformation,
    VideoInformation,
} from "../../global/projectCommon";

interface IProps {
    title: string;
    rank: number;
    poster: string;
    newest?: boolean;
    monopoly?: boolean;
    basic: any;
    detail: any;
    credit: any;
    video: any;
    logo: any;
    category: "movies" | "tv";
}

export default function RankPoster({
    title,
    rank,
    poster,
    newest,
    monopoly,
    basic,
    detail,
    credit,
    video,
    logo,
    category,
}: IProps) {
    const navigate = useNavigate();
    const setBasic = useSetRecoilState(BasicInformation);
    const setDetail = useSetRecoilState(DetailInformation);
    const setCredit = useSetRecoilState(CreditInformation);
    const setVideo = useSetRecoilState(VideoInformation);
    const setLogo = useSetRecoilState(LogoInformation);

    function onMovieClick() {
        setBasic(basic);
        setDetail(detail);
        setCredit(credit);
        setVideo(video);
        setLogo(logo);
        navigate(`/home/${category}/${title}`);
    }

    return (
        <HStack
            h="180px"
            justifyContent="flex-start"
            alignItems="end"
            spacing="0"
            onClick={onMovieClick}
        >
            <Box
                w="50%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="end"
                color="black"
                fontSize="50px"
                fontWeight="bold"
                textShadow="-1px 1px 8px rgb(35, 153, 230)"
                mr="-30px"
            >
                {rank}
            </Box>
            <Box
                w="55%"
                h="110%"
                bgSize="cover"
                bgPosition="center"
                bgImage={`url(${poster})`}
                borderRadius="5px"
                position="relative"
                _hover={{
                    cursor: "pointer",
                    transform: "scale(1.3)",
                }}
                transition="all 0.2s linear"
            >
                {monopoly && <MonopolyBadge />}
                {newest && <NewestBadge />}
            </Box>
        </HStack>
    );
}
