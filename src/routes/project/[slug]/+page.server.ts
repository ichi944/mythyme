import { projects } from "../data"

export function load({ params }) {
    const project = projects.find(project => project.slug === params.slug);
    return { project };
}
