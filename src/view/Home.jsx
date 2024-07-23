import { Button, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full h-full text-center p-4 gap-6">
            <img src="/pyoe.png" alt="PyOE Logo" className="w-1/3 max-w-64 mx-auto" />
            <Typography color="inherit" className="text-default-black" variant="h1">{t("home.title")}</Typography>
            <Typography color="inherit" className="text-gray-500" variant="h3">{t("home.description")}</Typography>
            <div className="flex flex-row justify-center gap-8">
                <Button className="py-4 px-8 text-lg rounded-xl bg-blue-300">
                    {t("home.get_started")}
                </Button>
                <Button className="py-4 px-8 text-lg rounded-xl bg-default-black">
                    {t("home.learn_more")}
                </Button>
            </div>
        </div>
    );
}

export default Home;
