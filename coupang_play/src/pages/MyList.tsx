import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { FAVORITE_MOVIES, FAVORITE_TVS } from "../global/projectCommon";
import { useSuspenseQueries } from "@tanstack/react-query";
import { MovieHandlerAPI, TVHandlerAPI } from "../global/api";
import { Suspense } from "react";
import OneLineSkeleton from "../components/home/skeleton/OneLineSkeleton";
import MovieSlider from "../components/slider/MovieSlider";
import TVSlider from "../components/slider/TVSlider";
import Header from "../components/home/Header";
import Footer from "./common/Footer";

export default function MyList() {
    const movieAPI = new MovieHandlerAPI();
    const tvAPI = new TVHandlerAPI();

    const movies = useRecoilValue(FAVORITE_MOVIES);
    const tvs = useRecoilValue(FAVORITE_TVS);

    const movieResults = useSuspenseQueries({
        queries: movies.map((id: number) => ({
            queryKey: ["movieFavorite", id],
            queryFn: movieAPI.details,
            staleTime: Infinity,
        })),
    });
    const movieDatas = movieResults.map((deail) => deail.data) as any;

    const tvResults = useSuspenseQueries({
        queries: tvs.map((id: number) => ({
            queryKey: ["tvFavorite", id],
            queryFn: tvAPI.details,
            staleTime: Infinity,
        })),
    });
    const tvDatas = tvResults.map((deail) => deail.data) as any;

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 찜한 콘텐츠</title>
            </Helmet>

            <VStack w="100%" h="750px" pt="150px">
                <Suspense fallback={<OneLineSkeleton />}>
                    <MovieSlider
                        title="내가 찜한 영화"
                        movieResults={movieDatas}
                    />
                </Suspense>
                <Suspense fallback={<OneLineSkeleton />}>
                    <TVSlider title="내가 찜한 TV쇼" tvResults={tvDatas} />
                </Suspense>
            </VStack>
        </>
    );
}
