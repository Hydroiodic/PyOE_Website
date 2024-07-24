import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

function Pagination({ total, page, set_page }) {
    // use i18n to translate
    const { t } = useTranslation();

    if (total === 0) {
        return (
            <div className="flex justify-center items-center mt-10">
                <Typography variant="h4" color="gray">
                    {t("pagination.not_found")}
                </Typography>
            </div>
        );
    }

    const getItemProps = (index) =>
    ({
        variant: page === index ? "filled" : "text",
        color: "gray",
        onClick: () => {
            set_page(index);
        },
        key: index,
    });

    const next = () => {
        if (page === total - 1) return;
        set_page(page + 1);
    };

    const prev = () => {
        if (page === 0) return;
        set_page(page - 1);
    };

    let items = [];
    for (let i = 0; i < total; i++) {
        items.push(<IconButton {...getItemProps(i)}>{i + 1}</IconButton>);
    }

    return (
        <div className="flex items-center gap-4 mt-[3vh] self-center">
            <Button variant="text" className="flex items-center gap-2" onClick={prev} disabled={page === 0}>
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                {t("pagination.prev")}
            </Button>
            <div className="flex items-center gap-2">
                {items}
            </div>
            <Button variant="text" className="flex items-center gap-2" onClick={next} disabled={page === total - 1}>
                {t("pagination.next")}
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default Pagination;
