import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "../components/home/Header";
import { useRecoilValue } from "recoil";
import { IS_USER_LOGIN } from "../global/projectCommon";
import { useToast } from "@chakra-ui/react";
import Login from "./Login";
import { useEffect } from "react";

export default function HomeLayout() {
    const toast = useToast();
    const navigate = useNavigate();
    const isUserLogin = useRecoilValue(IS_USER_LOGIN);

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
                    <Outlet />
                    <Footer />
                </>
            ) : (
                <Login />
            )}
        </>
    );
}
