interface Services {
    title : string,
    description : string,
    image? : string,
    link : string,
    tags : string[],
}


const services : Services[] = [
    {
        title : "Paid Marketing",
        description : "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
        link : "/",
        tags : ["marketing", "paid", "services"],
    },
    {
        title : "Web Development",
        description : "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
        link : "/",
        tags : ["web", "development", "services"],
    },
    {
        title : "Social Media",
        description : "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
        link : "/social-media-strategy",
        tags : ["social", "media", "services"],
    },
    {
        title : "Digital Marketing",
        description : "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
        link : "/",
        tags : ["digital", "marketing", "services"],    
    },
    {
        title : "App Development",
        description : "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
        link : "/",
        tags : ["app", "development", "services"],   
    },
    {
        title : "SEO",
        description : "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
        link : "/",
        tags : ["seo", "services"],
    }


]

export default services