/* this component is modified from @material-tailwind */

import React from "react";
import {
    Navbar, Collapse, Typography, IconButton, List, ListItem,
    Menu, MenuHandler, MenuList, MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { paper_items, github_items } from './constants'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavListMenu({ list_name, items }) {
    // the state of the menu
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // render the items in the menu
    const renderItems = items.map(
        ({ icon, title, description, url }, key) => (
            <a href={url} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray" className="flex items-center text-lg font-bold">
                            {title}
                        </Typography>
                        <Typography variant="paragraph" className="text-md !font-medium text-blue-gray-500">
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="top"
                allowHover={true}>
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-xl"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
                            {list_name}
                            <ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block 
                                ${isMenuOpen ? "rotate-180" : ""}`} />
                            <ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden 
                                ${isMobileMenuOpen ? "rotate-180" : ""}`} />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    // use i18n to translate this component
    const { t } = useTranslation();

    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography variant="small" color="blue-gray" className="font-medium">
                <Link to="/home">
                    <ListItem className="flex items-center gap-2 py-2 pr-4 text-xl">
                        {t("navbar.home")}
                    </ListItem>
                </Link>
            </Typography>
            <NavListMenu list_name={t("navbar.paper")} items={paper_items} />
            <NavListMenu list_name={t("navbar.github")} items={github_items} />
        </List>
    );
}

function MegaMenu() {
    // use i18n to translate this component
    const { t } = useTranslation();

    // state to control the navbar
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-full px-4 py-4 shadow-none border-b-2 border-gray-200">
            <div className="flex items-center justify-between text-blue-gray-900 mx-12">
                <Link to="/home">
                    <div className="flex gap-2">
                        <BookOpenIcon className="w-12 h-12 text-yellow-800" />
                        <Typography variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-2xl">
                            {t("navbar.title")}
                        </Typography>
                    </div>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default MegaMenu;
