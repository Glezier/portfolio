import type { TechnologyCategory } from "../types/Technology"

export const technologyCategories: TechnologyCategory[] = [
    {
        id: 'frontend',
        title: 'Frontend',
        technologies: ['JavaScript', 'TypeScript', 'React']
    },
    {
        id: 'backend',
        title: 'Backend',
        technologies: ['SpringBoot', 'Node.js', 'Express']
    },
    {
        id: 'database',
        title: 'Banco de dados',
        technologies: ['PostgreSQL', 'MySQL'],
    },
    {
        id: 'tools',
        title: 'Ferramentas',
        technologies: ['Git', 'Docker'],
    },
]