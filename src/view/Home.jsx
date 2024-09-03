import { useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import Post from "../components/home/Post";

import tutorialMarkdown from "../markdown/tutorial.md";
import DetailsMarkdown from "../markdown/details.md";
import ExamplesMarkdown from "../markdown/examples.md";
import NoteMarkdown from "../markdown/note.md";

function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="flex flex-col w-full h-full text-center p-8 gap-6 items-center">
            <img src="/pyoe.png" alt="PyOE Logo" className="w-1/3 max-w-64 mx-auto" />
            <Typography color="inherit" className="text-default-black text-6xl lg-max:text-4xl" variant="h1">
                {t("home.title")}
            </Typography>
            <Typography color="inherit" className="text-gray-500 text-4xl lg-max:text-2xl" variant="h3">
                {t("home.description")}
            </Typography>
            <div className="flex flex-row justify-center gap-8">
                <Button className="py-4 px-8 text-lg rounded-xl bg-blue-300 lg-max:text-sm lg-max:py-3 lg-max:px-4"
                    onClick={() => navigate("#tutorial")}>
                    {t("home.get_started")}
                </Button>
                <Button className="py-4 px-8 text-lg rounded-xl bg-default-black lg-max:text-sm lg-max:py-2 lg-max:px-4"
                    onClick={() => window.location.href = "https://github.com/Xtra-Computing/PyOE"}>
                    {t("home.learn_more")}
                </Button>
            </div>

            {/* Spacing */}
            <div className="h-8 lg-max:h-4" />

            {/* Below contain lots of posts that we need to show */}
            <div className="flex flex-col w-full gap-16 lg-max:gap-8 items-center">
                <Post content={tutorialMarkdown} title="tutorial" />
                <Post content={DetailsMarkdown} title="details" />
                <Post content={ExamplesMarkdown} title="examples" />
                <Post content={NoteMarkdown} title="note" />
            </div>
        </div>
    );
}

export default Home;
