import type { Experience } from '../types/Experience'

export const experiences: Experience[] = [
  {
    id: 'computer-science',
    type: 'education',
    title: 'Graduação em Ciência da Computação',
    organization: 'UNIVERSIDADE FEDERAL DO MARANHÃO',
    period: '2024 — 2027',
    description:
      'Formação voltada a fundamentos da computação, desenvolvimento de software, algoritmos e resolução de problemas.',
  },
  {
    id: 'scientific-research',
    type: 'research',
    title: 'Iniciação Científica',
    organization: 'TeleMídia - MA',
    period: '2026',
    description:
      'Desenvolvimento de uma plataforma voltada a ensino de programação seguindo o BNCC Computação. Contou com expansão da plataforma para municípios e interiores do Maranhão.',
    highlights: [
      'Desenvolvimento da plataforma',
      'Produção de conteúdo básico de programação',
      'Backend: SpringBoot',
      'Frontend: React'
    ],
  },
  {
    id: 'programming-contest',
    type: 'competition',
    title: 'Maratona de Programação',
    organization: 'SBC',
    period: '2026',
    description:
      'Participação em equipe na resolução de problemas de algoritmos e estruturas de dados em programação competitiva.',
    highlights: [
      'Resolução de problemas',
      'Trabalho em equipe',
      'Algoritmos e estruturas de dados',
      'Programação competitiva'
    ],
  },
]