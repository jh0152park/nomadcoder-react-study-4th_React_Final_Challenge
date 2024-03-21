import { Grid } from "@chakra-ui/react";
import VideoSkeleton from "./VideoSkeleton";

export default function OneLineSkeleton() {
    return (
        <Grid
            templateColumns="repeat(6, 1fr)"
            templateRows="repeat(1, 1ft)"
            gap="20px"
            mt="40px"
        >
            {[...new Array(6)].map((s, i) => (
                <VideoSkeleton key={i} />
            ))}
        </Grid>
    );
}
