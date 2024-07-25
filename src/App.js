import Home from "./view/Home";
import Layout from "./view/Layout";
import Datasets from "./view/Datasets";
import Detail from "./view/Detail";
import ReturnHome from "./utils/ReturnHome";
import { createBrowserRouter } from "react-router-dom";

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
            {
                path: "/detail/:dataset_name",
                element: <Detail />,
            },
        ],
    },
]);

export default router;
