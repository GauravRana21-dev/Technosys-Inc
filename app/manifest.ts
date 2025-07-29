import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Technosys Inc",
    short_name: "Technosys Inc",
    description: "Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/png",
      }
    ],
    start_url : "/",
    prefer_related_applications : false,
    display : "standalone",
    theme_color : "#4f11ff",
    background_color : "#f6f5f1"
  };
}
