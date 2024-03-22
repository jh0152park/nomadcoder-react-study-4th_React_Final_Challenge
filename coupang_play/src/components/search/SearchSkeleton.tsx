import { Grid } from "@chakra-ui/react";
import VideoSkeleton from "../home/skeleton/VideoSkeleton";

export default function SearchSkeleton() {
    return (
        <Grid
            templateColumns="repeat(6, 1fr)"
            templateRows="repeat(2, 1ft)"
            gap="20px"
            mt="150px"
        >
            {[...new Array(18)].map((s, i) => (
                <VideoSkeleton key={i} />
            ))}
        </Grid>
    );
}
