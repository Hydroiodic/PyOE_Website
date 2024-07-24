import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Typography, Card, CardHeader, Input, Button, CardBody, CardFooter, Tabs, TabsHeader, Tab
} from "@material-tailwind/react";
import { datasets_tabs, datasets_table_head, datasets_table_data } from "../components/common/constants";
import Pagination from "../utils/Pagination";

function Datasets() {
    // use i18n to translate
    const { t } = useTranslation();

    // the index of the page
    const [page, set_page] = useState(0);
    const [items, set_items] = useState(datasets_table_data);

    // use datasets_tabs to create a filter
    const filter = datasets_tabs.map((tab) =>
        <Tab key={tab} value={tab}>
            <Typography color="blue-gray" className="font-normal leading-none opacity-70 text-center py-2">
                &nbsp;&nbsp;{t(`datasets.tabs.${tab}`)}&nbsp;&nbsp;
            </Typography>
        </Tab>
    );

    // use datasets_table_head to create a table
    const heads = datasets_table_head.map((head) =>
        <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                {t(`datasets.heads.${head}`)}
            </Typography>
        </th>
    );

    const body = items.map((data, index) => {
        // there will be a horizontal line under the last row
        const is_last = index === datasets_table_data.length - 1;
        const classes = is_last ? "p-4" : "p-4 border-b border-blue-gray-50";

        // use datasets_table_data to create a table row
        const each_one = datasets_table_head.map((head) => {
            // the last column is a button
            return head === "empty" ? (
                <td className={classes}>
                    <Button variant="text" size="sm">
                        {t("datasets.check")}
                    </Button>
                </td>
            ) : (
                <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {data[head]}
                    </Typography>
                </td>
            );
        });

        return (
            <tr key={index}>
                {each_one}
            </tr>
        );
    });

    return (
        <div className="flex flex-col w-full h-full p-8 gap-6 items-center">
            <Card className="h-full w-[70vw] lg-max:w-[90vw] p-4">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8 lg-max:flex-col">
                        <div>
                            <Typography variant="h3" color="blue-gray">
                                {t("datasets.title")}
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                {t("datasets.description")}
                            </Typography>
                        </div>
                        <div className="w-full md:w-72">
                            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <div className="flex items-center justify-between gap-8">
                        <Tabs value="all" orientation="vertical" className="px-4 lg-max:hidden">
                            <TabsHeader>
                                {filter}
                            </TabsHeader>
                        </Tabs>
                        <table className="mt-4 w-full min-w-max table-auto text-left self-start">
                            <thead>
                                <tr>
                                    {heads}
                                </tr>
                            </thead>
                            <tbody>
                                {body}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
                <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
                    <Pagination total={Math.ceil(items.length / 5)} page={page} set_page={set_page} />
                </CardFooter>
            </Card>
        </div>
    );
}

export default Datasets;
