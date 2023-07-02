import { error } from "@sveltejs/kit";
import { projects } from "../data"
import { message } from "$lib/message"

type ProjectSlug = {
    slug: string;
}
export function load({ params }: { params: ProjectSlug }) {
    const project = projects.find(project => project.slug === params.slug);
    if (!project) {throw error(404, 'Project not found');}
    return { project, message };
}
