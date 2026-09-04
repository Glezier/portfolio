import type { Project } from "../types/Project";

import dashboardImage from "../assets/mygmanager/Dashboard.png";

export const projects: Project[] = [
    {
        id: 'mygmanager',
        title: 'My GManager',
        category: 'Aplicação Web Full Stack',
        description: 'Plataforma de organização pessoal criada para centralizar funcionalidades relacionadas à rotina e à produtividade do usuário.',
        technologies: [
            'React',
            'Vite',
            'Node.js',
            'Express',
            'PostgreSQL',
            'JWT'
        ],
        featured: true,
        highlights: [
            'Organização por calendário',
            'Sistema de notas',
            'Autenticação de usuários',
            'Persistência de dados',
            'Deploy em produção',
        ],
        image: dashboardImage,
        imageAlt: 'Tela principal do My GManager com recursos de organização pessoal',
        githubUrl: 'https://github.com/Glezier/GManager',
        liveUrl: 'https://www.mygmanager.com.br/'
    }
]