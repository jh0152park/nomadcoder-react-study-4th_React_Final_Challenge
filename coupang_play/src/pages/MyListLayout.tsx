import { Outlet } from "react-router-dom";
import Header from "../components/home/Header";
import Footer from "./common/Footer";

export default function MyListLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
