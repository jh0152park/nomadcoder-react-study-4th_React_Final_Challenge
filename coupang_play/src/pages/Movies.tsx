import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";
import MainSkeleton from "../components/home/skeleton/MainSkeleton";
import { IEntireDatas } from "./HomeLayout";
import MovieBanner from "../components/banner/MovieBanner";
import GenreCategories from "../components/genre/GenreCategories";
import MovieTop20 from "../components/top20/MovieTop20";
import MovieSlider from "../components/slider/MovieSlider";
import OneLineSkeleton from "../components/home/skeleton/OneLineSkeleton";

function Movies() {
    const entireDatas = useOutletContext<IEntireDatas>();

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>

            <Suspense fallback={<MainSkeleton />}>
                <MovieBanner movieResults={entireDatas?.mNowPlaying} />
            </Suspense>

            <GenreCategories category="movie" />

            <Suspense fallback={<OneLineSkeleton />}>
                <MovieTop20 movieResults={entireDatas?.mPopular} />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <MovieSlider
                    title="리뷰 많은 영화"
                    movieResults={entireDatas?.mTopRated}
                />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <MovieSlider
                    title="곧 찾아올 영화"
                    movieResults={entireDatas?.mUpComming}
                />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <MovieSlider
                    title="내가 좋아할 만한 콘텐츠"
                    movieResults={entireDatas?.mExtra1}
                />
            </Suspense>
            <Suspense fallback={<OneLineSkeleton />}>
                <MovieSlider
                    title="지금 뜨는 콘텐츠"
                    movieResults={entireDatas?.mExtra2}
                />
            </Suspense>
            <Suspense fallback={<OneLineSkeleton />}>
                <MovieSlider
                    title="웅장한 세계관"
                    movieResults={entireDatas?.mExtra3}
                />
            </Suspense>
            {/* <Suspense fallback={<OneLineSkeleton />}>
                <MovieSlider
                    title="내가 즐겨 본 장르"
                    movieResults={entireDatas?.mExtra4}
                />
            </Suspense> */}
        </>
    );
}

export default React.memo(Movies);
