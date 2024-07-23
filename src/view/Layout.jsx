import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HomeContext } from "../components/common/contexts";
import MegaMenu from "../components/common/MegaMenu";
import AlertMessage from "../utils/AlertMessage";
import Footer from "../components/common/Footer";

function Layout() {
    // some variables to alert message
    const [show_message, show_handler] = useState(false);
    const [message, message_handler] = useState("");

    return (
        <>
            <AlertMessage show_message={show_message} show_handler={show_handler} content={message} />
            <HomeContext.Provider value={{ show_handler, message_handler }}>
                <div className="bg-white bg-no-repeat bg-cover bg-fixed w-screen">
                    <MegaMenu />
                    <div className="h-full w-full mb-[10vh]">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </HomeContext.Provider>
        </>
    );
};

export default Layout;
