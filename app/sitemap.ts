import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.technosysincor.com",
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        {
            url: "https://www.technosysincor.com/aboutus",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.technosysincor.com/services",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.technosysincor.com/contact",
            lastModified: new Date().toISOString(),
            changeFrequency: "yearly",
            priority: 0.8
        },
        {
            url: "https://www.technosysincor.com/privacy",
            lastModified: new Date().toISOString(),
            changeFrequency: "yearly",
            priority: 0.8
        },
        {
            url: "https://www.technosysincor.com/termsandconditions",
            lastModified: new Date().toISOString(),
            changeFrequency: "never",
            priority: 0.8
        }
    ]
}