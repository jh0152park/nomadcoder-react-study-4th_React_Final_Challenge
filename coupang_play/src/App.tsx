import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import { Suspense } from "react";

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
        path: "/home",
        element: (
            <Suspense fallback={<h1>Loading~.~</h1>}>
                <HomeLayout />
            </Suspense>
        ),
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
