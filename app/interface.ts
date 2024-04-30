export interface simpleBlogCard{
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: string;
}

export interface BlogParams{
    params:{ 
        slug:string;
    }
}

export interface fullBlog{
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
}