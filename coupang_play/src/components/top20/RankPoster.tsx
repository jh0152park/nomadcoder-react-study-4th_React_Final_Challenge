import { Box, Center, HStack, Image } from "@chakra-ui/react";
import MonopolyBadge from "./MonoplyBadge";
import NewestBadge from "./NewestBadge";

interface IProps {
    rank: number;
    poster: string;
    newest?: boolean;
    monopoly?: boolean;
}

export default function RankPoster({ rank, poster, newest, monopoly }: IProps) {
    return (
        <HStack
            h="180px"
            justifyContent="flex-start"
            alignItems="end"
            spacing="0"
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
