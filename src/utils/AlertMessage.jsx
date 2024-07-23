import { Alert } from "@material-tailwind/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AlertMessage({ content, show_message, show_handler }) {
    // use i18n for translation
    const { t } = useTranslation();

    // default value of content
    if (!content) content = t("alert.default");

    // delay for 1.5 seconds and then close automatically
    useEffect(() => {
        let timer;
        if (show_message) {
            timer = setTimeout(() => {
                show_handler(false);
            }, 1500);
        }
        return () => clearTimeout(timer); // clear the timer
    }, [show_handler, show_message]);

    return (
        <div className="flex justify-center fixed top-10 left-0 w-full z-[9999]">
            <div className="w-auto">
                <Alert open={show_message} onClose={() => show_handler(false)}
                    animate={{ mount: { y: 0 }, unmount: { y: -100 } }}>
                    {content}
                </Alert>
            </div>
        </div>
    );
}

export default AlertMessage;
