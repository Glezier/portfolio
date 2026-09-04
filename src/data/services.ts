import type { Service } from "../types/Service"

export const services: Service[] = [
    {
        id: 'web-apps',
        title: 'Aplicações web responsivas',
        description:
        'Desenvolvimento de interfaces modernas, responsivas e organizadas para produtos, sistemas internos e páginas profissionais.',
    },
    {
        id: 'frontend',
        title: 'Frontend com React',
        description:
        'Construção de telas, componentes reutilizáveis, integração com APIs e cuidado com usabilidade, acessibilidade e responsividade.',
    },
    {
        id: 'backend',
        title: 'Backend e APIs REST',
        description:
        'Criação de APIs, regras de negócio, autenticação e integração com banco de dados para aplicações web.',
    },
    {
        id: 'fullstack',
        title: 'Desenvolvimento Full Stack',
        description:
        'Implementação de soluções completas, conectando interface, servidor, banco de dados e deploy.',
    }
]