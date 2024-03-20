import { Grid, HStack, VStack } from "@chakra-ui/react";
import MainSkeleton from "./skeleton/MainSkeleton";
import CategorySkeleton from "./skeleton/CategorySkeleton";
import VideoSkeleton from "./skeleton/VideoSkeleton";

export default function HomeSkeleton() {
    const screenWidth = document.documentElement.clientWidth;
    const numOfCategories = Math.ceil(screenWidth / 100) - 3;

    return (
        <VStack alignItems="center" zIndex={0}>
            <MainSkeleton />
            <HStack>
                {[...new Array(numOfCategories)].map((s, i) => (
                    <CategorySkeleton key={i} />
                ))}
            </HStack>
            <Grid
                templateColumns="repeat(6, 1fr)"
                templateRows="repeat(3, 1ft)"
                gap="20px"
                mt="40px"
            >
                {[...new Array(18)].map((s, i) => (
                    <VideoSkeleton key={i} />
                ))}
            </Grid>
        </VStack>
    );
}
