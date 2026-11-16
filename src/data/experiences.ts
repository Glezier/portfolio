import type { Experience } from '../types/Experience'

import cbiePresentationImage from '../assets/cbie/cbie_apresentacao.jpeg'
import cbieGroupImage from '../assets/cbie/cbie_grupo.jpeg'
import cbieArrivalImage from '../assets/cbie/cbie_chegada.jpeg'

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
    link: {
      label: 'Post no LinkedIn referente à participação na maratona',
      url: 'https://lnkd.in/p/eCHJiZxD'
    }
  },
  {
    id: 'cbie-2026',
    type: 'event',
    title: 'Participação no CBIE 2026',
    organization:
      '15º Congresso Brasileiro de Informática na Educação',
    period: '6 a 8 de outubro de 2026 — Goiânia, GO',
    description:
      'Participei do Congresso Brasileiro de Informática na Educação, onde apresentei o artigo “Seleção Adaptativa de Questões para Avaliação Rápida de Código em um Ambiente Gamificado de Ensino de Programação”, cujo autor principal é William Martins. Minha ida ao evento só pôde ocorrer graças ao projeto Wanda, qual fomentou a produção de dois artigos apresentados no CBIE. Foi um experiência recheada de aprendizado e contato com outros projetos de altíssima qualidade.',
    highlights: [
      'Apresentação de artigo científico',
      'Comunicação acadêmica',
      'Informática na educação',
      'Participação no SBIE',
    ],
    images: [
      {
        src: cbiePresentationImage,
        alt: 'Glezier apresentando um artigo científico durante o CBIE 2026',
      },
      {
        src: cbieGroupImage,
        alt: 'Glezier e participantes do CBIE 2026 em frente ao painel do evento',
      },
      {
        src: cbieArrivalImage,
        alt: 'Glezier ao lado do painel de identificação do CBIE 2026 em Goiânia',
      },
    ],
  }
]