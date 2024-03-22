import React, { Suspense } from "react";
import { useOutletContext } from "react-router-dom";
import { IEntireDatas } from "./HomeLayout";
import { Helmet } from "react-helmet";
import MainSkeleton from "../components/home/skeleton/MainSkeleton";
import TVBanner from "../components/banner/TVBanner";
import GenreCategories from "../components/genre/GenreCategories";
import OneLineSkeleton from "../components/home/skeleton/OneLineSkeleton";
import TVTop20 from "../components/top20/TVTop20";
import TVSlider from "../components/slider/TVSlider";

function Tvs() {
    const entireDatas = useOutletContext<IEntireDatas>();

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 와우회원은 무료!</title>
            </Helmet>

            <Suspense fallback={<MainSkeleton />}>
                <TVBanner tvResults={entireDatas?.tAiringToday} />
            </Suspense>

            <GenreCategories category="tv" />

            <Suspense fallback={<OneLineSkeleton />}>
                <TVTop20 tvResults={entireDatas?.tPopular} />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <TVSlider
                    title="리뷰 많은 TV쇼"
                    tvResults={entireDatas?.tTopRated}
                />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <TVSlider
                    title="방영중인 TV쇼"
                    tvResults={entireDatas?.tOnTheAir}
                />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <TVSlider
                    title="내가 좋아할 만한 TV쇼"
                    tvResults={entireDatas?.tExtra1}
                />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <TVSlider
                    title="지금 뜨는 TV쇼"
                    tvResults={entireDatas?.tExtra2}
                />
            </Suspense>

            <Suspense fallback={<OneLineSkeleton />}>
                <TVSlider
                    title="새로 올라온 TV쇼"
                    tvResults={entireDatas?.tExtra3}
                />
            </Suspense>

            {/* <Suspense fallback={<OneLineSkeleton />}>
                <TVSlider
                    title="내가 즐겨 본 장르의 TV쇼"
                    tvResults={entireDatas?.tExtra4}
                />
            </Suspense> */}
        </>
    );
}

export default React.memo(Tvs);
