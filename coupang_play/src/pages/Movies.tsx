import { Box } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";
import MainSkeleton from "../components/home/skeleton/MainSkeleton";
import { IEntireDatas } from "./HomeLayout";
import MovieBanner from "../components/banner/MovieBanner";
import GenreCategories from "../components/genre/GenreCategories";
import MovieTop20 from "../components/top20/MovieTop20";

function Movies() {
    const entireDatas = useOutletContext<IEntireDatas>();

    console.log("Entire Datas");
    console.log(entireDatas);

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>

            <Suspense fallback={<MainSkeleton />}>
                <MovieBanner movieResults={entireDatas?.mNowPlaying} />
            </Suspense>
            <GenreCategories category="movie" />
            <MovieTop20 movieResults={entireDatas?.mPopular} />
            <Box w="100%" h="200vh" />
        </>
    );
}

export default React.memo(Movies);
