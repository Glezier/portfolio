# Portfólio Profissional — Glezier Montalvane

## Visão do produto

Criar um portfólio moderno que apresente Glezier Montalvane como **Full Stack Developer** e demonstre sua capacidade por meio de projetos reais.

O visitante deve entender rapidamente quem é Glezier, o que ele constrói, quais tecnologias utiliza, quais são seus melhores trabalhos e como entrar em contato. O princípio central é **mostrar, não apenas afirmar**: competências devem ser sustentadas por projetos, experiências ou resultados verificáveis.

## Escopo do MVP

O MVP será uma página única e responsiva, composta por:

1. Navbar fixa com navegação e links sociais;
2. Hero com posicionamento, apresentação e CTAs;
3. Projetos, com destaque para o GManager;
4. Sobre e tecnologias;
5. Experiência acadêmica e atividades;
6. Serviços;
7. Contato;
8. Footer.

Certificações podem ficar dentro de Experiência. Blog, depoimentos, internacionalização, currículo para download e analytics ficam para versões futuras.

## Conteúdo

### Posicionamento e Hero

- Nome: Glezier Montalvane
- Título: Full Stack Developer
- Descrição-base: Desenvolvedor Full Stack focado na construção de aplicações web, APIs e soluções completas de software, do banco de dados à interface.
- CTA principal: **Ver projetos**
- CTA secundário: **Entrar em contato**

A formação em Ciência da Computação deve aparecer como contexto, sem dominar a apresentação. O Hero não deve listar todas as tecnologias.

### Projetos

Esta é a seção mais importante. O objetivo final é exibir de 4 a 6 trabalhos, mas o site pode ser publicado inicialmente com menos projetos fortes.

Um projeto deve ter autoria clara e demonstrar aplicação prática, qualidade, diferenciação ou alguma competência relevante. Evitar exercícios simples, cópias de tutoriais, repositórios vazios e projetos institucionais apresentados como pessoais.

Cada projeto deve informar, quando disponível:

- nome, categoria, problema e solução;
- funcionalidades e tecnologias;
- decisões ou desafios técnicos;
- screenshot;
- links da aplicação e do repositório.

### Projeto principal: GManager

O GManager será apresentado como um produto Full Stack e receberá maior destaque visual.

Tecnologias: React, Vite, Node.js, Express, PostgreSQL, JWT, Neon e Vercel.

Pontos técnicos: frontend integrado a uma API REST, autenticação, gerenciamento de usuários, persistência e isolamento de dados, banco em nuvem e deploy.

### Sobre, tecnologias e experiência

O texto Sobre deve ser breve e abordar Ciência da Computação, desenvolvimento Full Stack, engenharia de software, resolução de problemas e aprendizado contínuo.

Tecnologias devem ser organizadas por Frontend, Backend, Banco de dados e Ferramentas. Somente conhecimentos que possam ser defendidos tecnicamente serão publicados.

Experiência pode incluir formação, iniciação científica, Maratona de Programação e certificações relevantes. Trabalhos colaborativos ou institucionais devem descrever precisamente a contribuição de Glezier.

### Serviços e contato

Apresentar apenas serviços que possam ser entregues com segurança: aplicações web responsivas, frontend, backend e APIs REST, desenvolvimento Full Stack e manutenção.

O contato deve incluir e-mail, GitHub e LinkedIn. Um formulário é opcional e não exige backend no MVP.

## Direção visual

O design deve ser escuro, moderno, minimalista, elegante e próximo de um produto de tecnologia.

Evitar excesso de ícones, neon, partículas, gradientes, animações constantes, textos longos, barras percentuais de habilidade e aparência de template genérico.

Hierarquia: **apresentação → projetos → competências → experiência → contato**.

## Implementação

Stack inicial: React, Vite, TypeScript, CSS, Git, GitHub e Vercel.

O conteúdo deve ficar separado dos componentes em arquivos de dados tipados. A estrutura deve permitir adicionar ou substituir projetos sem modificar o layout. Não será criado backend apenas para aumentar a complexidade.

```text
src/
├── components/
├── data/
├── types/
├── assets/
├── styles/
├── App.tsx
└── main.tsx
```

## Qualidade

- Layout responsivo para smartphone, tablet e desktop;
- HTML semântico, textos alternativos e navegação por teclado;
- foco visível, contraste adequado e suporte a `prefers-reduced-motion`;
- nenhuma informação dependente exclusivamente de hover;
- título, meta description, favicon, canonical e Open Graph;
- imagens otimizadas, poucas dependências e animações leves;
- build sem erros e validação com Lighthouse.

Título sugerido: `Glezier Montalvane | Full Stack Developer`.

## Critérios de conclusão

O MVP estará pronto quando posicionar claramente Glezier, apresentar o GManager, usar somente informações reais e com autoria clara, funcionar em mobile e desktop, possuir links e contato válidos, apresentar experiências relevantes, atender ao SEO e à acessibilidade básicos e estiver publicado sem links quebrados.

## Evolução

O site poderá receber projetos, cases, trabalhos freelance, versão em inglês, artigos e depoimentos. Um projeto novo só deve entrar quando representar o nível atual, acrescentar uma competência relevante, possuir autoria e documentação claras e puder ser explicado em uma entrevista.


Navbar → Experiências → Projeto GManager → Contact/Footer → Responsividade → Deploy.
readme e ajustar o css todo