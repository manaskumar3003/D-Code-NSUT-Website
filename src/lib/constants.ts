import { Metadata } from "next";

const constant = {
    NAME : "D'Code NSUT",
    DISCRIPTION : "D'Code NSUT society decedicaed to promote coding culture in NSUT",
    LOGO : "",
    THEAME_COLOR : "#000000",
    BASE_URL: 'http://localhost:3000',
}

export default constant;

export const TEMPLATE_METADATA:Metadata = {
    title: {
        default: constant.NAME,
        template: `%s | ${constant.NAME}`,
    },
    description: constant.DISCRIPTION,
    icons: {
        shortcut: constant.LOGO,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: constant.BASE_URL,
        title: {
            default: constant.NAME,
            template: `%s | ${constant.NAME}`,
        },
        description: constant.DISCRIPTION,
        images: [
            {
                url: constant.LOGO,
                width: 800,
                height: 600,
                alt: constant.NAME,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: {
            default: constant.NAME,
            template: `%s | ${constant.NAME}`
        },
        description: constant.DISCRIPTION,
        images : {
            url: constant.LOGO,
            alt: constant.NAME,
        },

    },
}