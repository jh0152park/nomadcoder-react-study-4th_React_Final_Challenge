import { FaStar } from "react-icons/fa";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface ISummaryProps {
    score: number;
    genre: string;
    runtime: number;
}

export default function Summary({ score, genre, runtime }: ISummaryProps) {
    return (
        <HStack my="15px">
            <Icon as={FaStar} w="20px" h="20px" color="rgb(18, 148, 244)" />
            <HStack fontWeight="bold" fontSize="20px" mt="3px" spacing="1px">
                <Text>{+score.toFixed(1) > 0 ? score.toFixed(1) : "5.0"}</Text>
                <Text>•</Text>
                <Text>{genre}</Text>
                <Text>•</Text>
                <Text>{convertRuntime(runtime)}</Text>
            </HStack>
        </HStack>
    );
}

function convertRuntime(runtime: number): string {
    const h = Math.floor(runtime / 60);
    const m = runtime % 60;
    const M = m > 9 ? m + "" : `0${m}`;

    if (h) return `${h}시간 ${M}분`;
    return `${M}분`;
}
