import { CommandLineIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

// the content of menuBar
export const paper_items = [
    {
        title: "OEBench",
        description: "Exploring the mystery of open environment challenges.",
        icon: DocumentTextIcon,
        url: "https://arxiv.org/pdf/2308.15059v3",
    },
];

export const github_items = [
    {
        title: "PyOE",
        description: "An easy-use benchmark system.",
        icon: CommandLineIcon,
        url: "https://github.com/sjtudyq/PyOE",
    },
];

// the content of the website footer
export const footer_items = [
    {
        "title": "About Us",
        "url": "/home",
    },
    {
        "title": "Contact Us",
        "url": "/home",
    },
];

export const datasets_tabs = [
    "all",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
];

export const datasets_table_head = [
    "name",
    "description",
    "type",
    "size",
    "empty",
];

export const datasets_table_data = [
    {
        "name": "Test Dataset",
        "description": "This is a test dataset",
        "type": "csv",
        "size": "1.2MB",
        "empty": "",
    },
    {
        "name": "Test Dataset",
        "description": "This is a test dataset",
        "type": "csv",
        "size": "1.2MB",
        "empty": "",
    },
];
