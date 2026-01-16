// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guía del Jugador',
      collapsible: true,
      collapsed: false,
      items: ['como-jugar', 'puntos'],
    },
    {
      type: 'category',
      label: 'Información',
      collapsible: true,
      collapsed: false,
      items: ['premios', 'faq', 'roadmap'],
    },
  ],
};

export default sidebars;