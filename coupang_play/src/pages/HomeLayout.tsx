import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "../components/home/Header";
import { useRecoilValue } from "recoil";
import { IS_USER_LOGIN } from "../global/projectCommon";
import { useToast } from "@chakra-ui/react";
import Login from "./Login";
import { useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MovieHandlerAPI, TVHandlerAPI } from "../global/api";
import { IMovieListsResponse } from "../global/apiResponse";

export default function HomeLayout() {
    const toast = useToast();
    const navigate = useNavigate();
    const isUserLogin = useRecoilValue(IS_USER_LOGIN);

    const movieAPI = new MovieHandlerAPI();
    const tvAPI = new TVHandlerAPI();

    // entire movies call
    const mNowPlaying = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mNowPlaying", 1],
        queryFn: movieAPI.nowPlaying,
    });
    const mPopular = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mPopular", 1],
        queryFn: movieAPI.popular,
    });
    const mTopRated = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mTopRated", 1],
        queryFn: movieAPI.topRated,
    });
    const mUpComming = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mUpComming", 1],
        queryFn: movieAPI.upComming,
    });
    const mExtra1 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mExtra1", 3],
        queryFn: movieAPI.popular,
    });
    const mExtra2 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mExtra2", 4],
        queryFn: movieAPI.popular,
    });
    const mExtra3 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mExtra3", 3],
        queryFn: movieAPI.topRated,
    });
    const mExtra4 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["mExtra4", 4],
        queryFn: movieAPI.topRated,
    });

    // entire tvs call
    const tAiringToday = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tAiringToday", 1],
        queryFn: tvAPI.airingToday,
    });
    const tOnTheAir = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tOnTheAir", 1],
        queryFn: tvAPI.onTheAir,
    });
    const tPopular = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tPopular", 1],
        queryFn: tvAPI.popular,
    });
    const tTopRated = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tTopRated", 1],
        queryFn: tvAPI.topRated,
    });
    const tExtra1 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tExtra1", 3],
        queryFn: tvAPI.popular,
    });
    const tExtra2 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tExtra2", 4],
        queryFn: tvAPI.popular,
    });
    const tExtra3 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tExtra3", 3],
        queryFn: tvAPI.topRated,
    });
    const tExtra4 = useSuspenseQuery<IMovieListsResponse>({
        queryKey: ["tExtra4", 4],
        queryFn: tvAPI.topRated,
    });

    const entireDatas = {
        mNowPlaying: mNowPlaying.data.results,
        mPopular: mPopular.data.results,
        mTopRated: mTopRated.data.results,
        mUpComming: mUpComming.data.results,
        mExtra1: mExtra1.data.results,
        mExtra2: mExtra2.data.results,
        mExtra3: mExtra3.data.results,
        mExtra4: mExtra4.data.results,
        tAiringToday: tAiringToday.data.results,
        tOnTheAir: tOnTheAir.data.results,
        tPopular: tPopular.data.results,
        tTopRated: tTopRated.data.results,
        tExtra1: tExtra1.data.results,
        tExtra2: tExtra2.data.results,
        tExtra3: tExtra3.data.results,
        tExtra4: tExtra4.data.results,
    };

    /* eslint-disable */
    useEffect(() => {
        if (!isUserLogin) {
            toast({
                status: "error",
                title: "로그인 후 이용할 수 있습니다.",
            });
            navigate("/");
        }
    }, []);

    return (
        <>
            {isUserLogin ? (
                <>
                    <Header />
                    <Outlet context={entireDatas} />
                    <Footer />
                </>
            ) : (
                <Login />
            )}
        </>
    );
}
