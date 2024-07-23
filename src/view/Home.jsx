import { Button, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import Post from "../components/home/Post";

import tutorialMarkdown from "../markdown/tutorial.md";

function Home() {
    const { t } = useTranslation();

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
                <Button className="py-4 px-8 text-lg rounded-xl bg-blue-300 lg-max:text-sm lg-max:py-3 lg-max:px-4">
                    {t("home.get_started")}
                </Button>
                <Button className="py-4 px-8 text-lg rounded-xl bg-default-black lg-max:text-sm lg-max:py-2 lg-max:px-4">
                    {t("home.learn_more")}
                </Button>
            </div>

            {/* Spacing */}
            <div className="h-8 lg-max:h-4" />

            {/* Below contain lots of posts that we need to show */}
            <Post content={tutorialMarkdown} />
        </div>
    );
}

export default Home;
