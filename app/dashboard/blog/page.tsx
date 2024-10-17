import PostCard from "@/app/components/PostsCard";
import { PostsCardData } from "@/app/lib/IPosts";
import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `*[_type == 'posts'] | order(_createdAt desc) {
        title,
        _id,
        link,
        description,
        "imageUrl": image.asset->url
    }`;

    const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

    return data;
}
export default async function BlogPage() {
    const data: PostsCardData[] = await getData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 md:mx-20">
            {data.map((item) => (
                <PostCard key={item._id} {...item} />
            ))}
        </div>
    )
}