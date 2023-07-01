type Project = {
    id: number;
    name: string;
    slug: string;
    description: string;
}
type Projects = Project[];

export const projects: Projects = [
    {
        id: 1,
        name: 'Project 1',
        slug: 'project-1',
        description: 'Project 1 description'
    },
    {
        id: 2,
        name: 'Project 2',
        slug: 'project-2',
        description: 'Project 2 description'
    },
    {
        id: 3,
        name: 'Project 3',
        slug: 'project-3',
        description: 'Project 3 description'
    },
]
