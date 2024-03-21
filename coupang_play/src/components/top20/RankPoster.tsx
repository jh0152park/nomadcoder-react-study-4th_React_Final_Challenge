import { Box, HStack, Image } from "@chakra-ui/react";

interface IProps {
    rank: number;
    poster: string;
}

export default function RankPoster({ rank, poster }: IProps) {
    console.log(`input poster path: ${poster}`);
    console.log(`url(${poster})`);

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
            />
        </HStack>
    );
}
