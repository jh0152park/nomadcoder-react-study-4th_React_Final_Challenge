import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { GenresCategories } from "../genre/category";

export default function GenreGrid() {
    const movieGenres = GenresCategories.get(0)?.slice(0, 12);
    const tvGenres = GenresCategories.get(1)?.slice(0, 12);

    return (
        <VStack w="1180px" alignItems="flex-start" mt="20px">
            <Text fontSize="23px" fontWeight="bold" mb="5px">
                추천장르
            </Text>
            <HStack>
                {movieGenres?.map((c) => (
                    <Center
                        key={c}
                        pt="13px"
                        pb="10px"
                        px="17px"
                        mx="5px"
                        bg="rgb(10, 45, 66)"
                        color="rgb(35, 153, 230)"
                        borderRadius="30px"
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            bg: "rgb(18, 78, 116)",
                        }}
                    >
                        {c}
                    </Center>
                ))}
            </HStack>
            <HStack spacing="11px" mt="10px">
                {tvGenres?.map((c) => (
                    <Center
                        key={c}
                        pt="13px"
                        pb="10px"
                        px="17px"
                        mx="5px"
                        bg="rgb(10, 45, 66)"
                        color="rgb(35, 153, 230)"
                        borderRadius="30px"
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            bg: "rgb(18, 78, 116)",
                        }}
                    >
                        {c}
                    </Center>
                ))}
            </HStack>
        </VStack>
    );
}
