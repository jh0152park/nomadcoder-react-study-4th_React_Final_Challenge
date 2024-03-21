import { Box, Center, HStack, Image } from "@chakra-ui/react";

interface IProps {
    rank: number;
    poster: string;
    newest?: boolean;
    monopoly?: boolean;
}

export default function RankPoster({ rank, poster, newest, monopoly }: IProps) {
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
                position="relative"
            >
                {monopoly && (
                    <Center
                        w="60px"
                        h="30px"
                        fontSize="13px"
                        bgColor="black"
                        border="1px solid gray"
                        position="absolute"
                        top="5px"
                        left="5px"
                        borderRadius="5px"
                        fontWeight="bold"
                    >
                        <span style={{ color: "rgb(45, 184, 255)" }}>쿠플</span>
                        <span style={{ color: "white" }}>|</span>
                        <span style={{ color: "white" }}>독점</span>
                    </Center>
                )}
                {newest && (
                    <Center
                        w="35px"
                        h="30px"
                        fontSize="13px"
                        bgColor="black"
                        border="1px solid gray"
                        position="absolute"
                        top="5px"
                        left="5px"
                        borderRadius="5px"
                        fontWeight="bold"
                    >
                        <span style={{ color: "rgb(45, 184, 255)" }}>신규</span>
                    </Center>
                )}
            </Box>
        </HStack>
    );
}
