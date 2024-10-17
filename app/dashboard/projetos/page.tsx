import ProjectCard from "@/app/components/ProjectCard";
import { ProjectsCardData } from "@/app/lib/IProjects";
import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `*[_type == 'project'] | order(_createdAt desc) {
        title,
        _id,
        link,
        description,
        tags,
        "imageUrl": image.asset->url
    }`;

    const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

    return data;
}
export default async function ProjectPage() {
    const data: ProjectsCardData[] = await getData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-20">
            {data.map((item) => (
                <ProjectCard key={item._id} {...item} />
            ))}
        </div>
    );
}
