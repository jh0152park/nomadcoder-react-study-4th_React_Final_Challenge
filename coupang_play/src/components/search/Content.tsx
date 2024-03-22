import { HStack, Image, Text } from "@chakra-ui/react";

interface IProps {
    rank: number;
    image: string;
}

export default function Content({ rank, image }: IProps) {
    return (
        <HStack w="285px" h="125px" ml="10px" alignItems="flex-end" mb="20px">
            <Text
                w="45px"
                fontWeight="bold"
                fontSize="40px"
                mb="25px"
                mr="-10px"
            >
                {rank}
            </Text>
            <Image
                w="210px"
                h="100%"
                objectFit="cover"
                src={image}
                borderRadius="5px"
                _hover={{ cursor: "pointer" }}
            />
        </HStack>
    );
}
