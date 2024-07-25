import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { datasets } from "../data/datasets";
import { Typography, Card, CardHeader, CardBody } from "@material-tailwind/react";
import { dataset_detail_head } from "../components/common/constants";

function Detail() {
    // use i18n to translate
    const { t } = useTranslation();

    // create a navigator
    const navigate = useNavigate();
    // get dataset_name from the URL
    const { dataset_name } = useParams();
    // find the dataset with the given name
    const dataset = datasets.find((dataset) => dataset.name === dataset_name);

    // if not found, raise an error
    if (!dataset) {
        // redirect to the home page
        navigate("/home");
    }

    // use dataset_detail_head to create a table
    const heads = dataset_detail_head.map((head) =>
        <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                {t(`detail.heads.${head}`)}
            </Typography>
        </th>
    );

    const body = dataset_detail_head.map((head) => {
        // the last column is a button
        return (
            <td className="p-4 border-b border-blue-gray-50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {head === "category" ? t(`datasets.category.${dataset[head]}`) : dataset[head]}
                </Typography>
            </td>
        );
    });

    return (
        <div className="flex flex-col w-full h-full p-8 gap-6 items-center">
            <Card className="h-full w-[70vw] lg-max:w-[90vw] p-4">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8 lg-max:flex-col">
                        <div>
                            <Typography variant="h3" color="blue-gray">
                                {dataset.name}
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                {dataset.description}
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <div className="flex items-center justify-between gap-8">
                        <table className="w-full table-auto text-left self-start">
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
            </Card>
        </div>
    );
}

export default Detail;
