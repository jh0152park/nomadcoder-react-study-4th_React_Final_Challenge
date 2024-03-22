import { Grid, Text, VStack } from "@chakra-ui/react";
import Content from "./Content";

export default function ContentGrid() {
    const sequence = [0, 3, 6, 9, 1, 4, 7, 10, 2, 5, 8, 11];

    return (
        <VStack h="460px" mt="40px" alignItems="flex-start">
            <Text fontSize="23px" fontWeight="bold" mb="5px">
                지금 뜨는 콘텐츠
            </Text>
            <Grid
                h="420px"
                templateColumns="repeat(4, 1fr)"
                templateRows="repeat(3, 1fr)"
            >
                {[...new Array(12)].map((_, i) => (
                    <Content
                        key={i}
                        rank={sequence[i] + 1}
                        image={`/resources/images/search/${
                            sequence[i] + 1
                        }.avif`}
                    />
                ))}
            </Grid>
        </VStack>
    );
}
