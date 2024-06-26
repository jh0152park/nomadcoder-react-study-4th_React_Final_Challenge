import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFound";
import Login from "./pages/Login";
import HomeLayout from "./pages/HomeLayout";
import { Suspense } from "react";
import Movies from "./pages/Movies";
import HomeSkeleton from "./components/home/HomeSkeleton";
import NotSupport from "./pages/NotSuppot";
import Detail from "./pages/Detail";
import Tvs from "./pages/Tvs";
import MyList from "./pages/MyList";
import Search from "./pages/Search";
import MyListLayout from "./pages/MyListLayout";
import MyListSkeleton from "./components/mylist/MyListSkeleton";
import SearchLayout from "./pages/SearchLayout";
import SearchResult from "./pages/SearchResult";
import SearchSkeleton from "./components/search/SearchSkeleton";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Login />,
            },
        ],
    },
    {
        path: "/home/mylist",
        errorElement: <NotFound />,
        element: (
            <Suspense fallback={<MyListSkeleton />}>
                <MyListLayout />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: <MyList />,
            },
        ],
    },
    {
        path: "/home",
        element: (
            <Suspense fallback={<HomeSkeleton />}>
                <HomeLayout />
            </Suspense>
        ),
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Movies />,
            },
            {
                path: "movies",
                element: <Movies />,
            },
            {
                path: "movies/:title",
                element: <Detail />,
            },
            {
                path: "tv",
                element: <Tvs />,
            },
            {
                path: "tv/:title",
                element: <Detail />,
            },

            {
                path: "live",
                element: <NotSupport />,
            },
            {
                path: "buy",
                element: <NotSupport />,
            },
            {
                path: "kids",
                element: <NotSupport />,
            },
            {
                path: "news",
                element: <NotSupport />,
            },
        ],
    },
    {
        path: "/search",
        errorElement: <NotFound />,
        element: <SearchLayout />,
        children: [
            {
                path: "",
                element: <Search />,
            },
            {
                path: ":keyword",
                element: (
                    <Suspense fallback={<SearchSkeleton />}>
                        <SearchResult />
                    </Suspense>
                ),
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
