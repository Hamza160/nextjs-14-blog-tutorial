import { BlogParams, fullBlog } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
async function getData(slug: string){
    const query = `
    *[_type == 'blog'  && slug.current == '${slug}']{
        "currentSlug": slug.current,
            title,
            content,
            titleImage,
            smallDescription
        }[0]
    `;

    const data = await client.fetch(query);
    return data;
}
const BlogDetail = async ({params}: BlogParams) => {
    const data: fullBlog = await getData(params.slug);
    return (
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Jan Marchel - Blog</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image 
                src={urlFor(data.titleImage).url()}
                width={800}
                height={800}
                alt={data.title}
                priority
                className="rounded-lg mt-8 border"
            />
            <div className="mt-16 pros prose-blue prose-xl dark:prose-invert prose-headings:underline">
                <PortableText
                    value={data.content}
                />
            </div>
        </div>
    );
}

export default BlogDetail;