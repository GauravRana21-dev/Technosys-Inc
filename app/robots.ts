import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "GPTBot",
                allow: "/",
            }
        ],
        sitemap: "/sitemap.xml"

    }
}