import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "../components/home/Header";

export default function HomeLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
