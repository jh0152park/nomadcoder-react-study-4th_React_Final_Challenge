import React, { Suspense } from "react";
import { useOutletContext } from "react-router-dom";
import { IEntireDatas } from "./HomeLayout";
import { Helmet } from "react-helmet";
import MainSkeleton from "../components/home/skeleton/MainSkeleton";
import TVBanner from "../components/banner/TVBanner";

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
        </>
    );
}

export default React.memo(Tvs);
