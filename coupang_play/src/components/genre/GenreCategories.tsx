import { Center, HStack } from "@chakra-ui/react";
import { GenresCategories } from "./category";

interface IProps {
    category: "movie" | "tv";
}

export default function GenreCategories({ category }: IProps) {
    const categoryIndex = category === "movie" ? 0 : 1;
    const categories = GenresCategories.get(categoryIndex)!.slice(0, 19);

    return (
        <HStack w="100%" h="120px" justifyContent="center">
            {categories.map((c) => (
                <Center
                    key={c}
                    pt="17px"
                    pb="15px"
                    px="20px"
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
    );
}
