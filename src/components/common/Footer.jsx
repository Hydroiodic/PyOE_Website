import { Typography } from "@material-tailwind/react";
import { footer_items } from "./constants";
import { Link } from "react-router-dom";

function Footer() {
    // the content of footer
    const footer_items_list = footer_items.map((item, index) => {
        return (
            <li key={index}>
                <Link to={item.url}>
                    <Typography color="blue-gray" className="font-normal transition-colors text-gray-600 
                        hover:text-blue-500 focus:text-blue-500">
                        {item.title}
                    </Typography>
                </Link>
            </li>
        );
    });

    return (
        <footer className="flex flex-col w-full bg-blue-gray-100/50 px-16 py-6 lg-max:px-8">
            <div className="flex flex-row lg-max:flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <img src="/xtra.png" alt="xtra" className="w-10 h-10" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    {footer_items_list}
                </ul>
            </div>
            <hr className="w-screen my-4 border-blue-gray-100 self-center" />
            <Typography color="blue-gray" className="text-center font-normal text-gray-600">
                &copy; 2024 Xtra Seminar, National University of Singapore
            </Typography>
        </footer>
    );
}

export default Footer;
