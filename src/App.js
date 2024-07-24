import Home from "./view/Home";
import Layout from "./view/Layout";
import ReturnHome from "./utils/ReturnHome";
import { createBrowserRouter } from "react-router-dom";
import Datasets from "./view/Datasets";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReturnHome />,
        errorElement: <ReturnHome />,
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <ReturnHome />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/datasets",
                element: <Datasets />,
            },
        ],
    },
]);

export default router;
