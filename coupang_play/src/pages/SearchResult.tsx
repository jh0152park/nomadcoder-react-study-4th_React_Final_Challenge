import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { multiSearch } from "../global/api";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { imagePathGenerator } from "../utils";
import { useEffect } from "react";
import { Text, VStack } from "@chakra-ui/react";

export default function SearchResult() {
    const { keyword } = useParams();
    const { data, refetch } = useSuspenseQuery({
        queryKey: ["search", keyword],
        queryFn: multiSearch,
    });

    const movies = data.results.filter(
        (result: any) => result.backdrop_path && result.media_type === "tv"
    );

    const tvs = data.results.filter(
        (result: any) => result.backdrop_path && result.media_type === "movie"
    );

    const containerAnimation = {
        start: {
            opacity: 1,
        },
        end: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                bounce: 0.5,
                delayChildren: 0.5,
                staggerChildren: 0.3,
            },
        },
    };

    const videoAnimation = {
        start: {
            opacity: 0,
            y: -10,
        },
        end: {
            opacity: 1,
            y: 0,
        },
    };

    /* eslint-disable */
    useEffect(() => {
        refetch();
    }, [keyword]);

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - {keyword}</title>
            </Helmet>

            <VStack alignItems="flex-start">
                <Text
                    fontWeight="bold"
                    fontSize="30px"
                    mt="20px"
                    mb="-20px"
                >{`${
                    [...movies, ...tvs].length
                } search result for "${keyword}"`}</Text>
                <motion.div
                    variants={containerAnimation}
                    initial="start"
                    animate="end"
                    style={{
                        width: "90%",
                        paddingTop: "30px",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "20px",
                    }}
                >
                    {[...movies, ...tvs].map((data) => (
                        <motion.div
                            key={data.id}
                            variants={videoAnimation}
                            style={{
                                width: "290px",
                                height: "160px",
                                borderRadius: "10px",
                                backgroundImage: `url(${imagePathGenerator(
                                    data.backdrop_path || data.poster_path,
                                    "500"
                                )})`,
                                backgroundSize: "cover",
                                backgroundPosition: "top center",
                            }}
                        ></motion.div>
                    ))}
                </motion.div>
            </VStack>
        </>
    );
}
