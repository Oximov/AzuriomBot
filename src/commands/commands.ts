export default [
  {
    name: 'ask',
    embed: {
      en: {
        title: 'Ask your question',
        message:
          'When you have a question, **ask it directly** and **explain the problem clearly**!',
        fields: [
          {
            name: 'Don’t forget to read the documentation',
            value: 'https://azuriom.com/fr/docs',
          },
        ],
      },
      fr: {
        title: 'Posez votre question',
        message:
          'Lorsque vous avez une question, **posez la directement** en **expliquant clairement le problème** (les « ça marche pas » sont à proscrire car ils n’apportent aucune information sur le problème)!',
        fields: [
          {
            name: 'Pensez également à lire la documentation',
            value: 'https://azuriom.com/fr/docs',
          },
        ],
      },
    },
  },
  {
    name: 'faq',
    embed: {
      en: {
        title: 'Common Problems',
        message:
          'Solutions to common problems are explained in the [documentation](https://azuriom.com/en/docs/troubleshooting).',
      },
      fr: {
        title: 'Problèmes courants',
        message:
          'Les solutions aux problèmes courants sont expliquées dans la [documentation](https://azuriom.com/fr/docs/troubleshooting)',
      },
    },
  },
  {
    name: 'docs',
    embed: {
      en: {
        title: 'Documentation',
        message:
          'You can find information about the installation and use of Azuriom in the [documentation](https://azuriom.com/en/docs).',
      },
      fr: {
        title: 'Documentation',
        message:
          'Vous pouvez trouver des informations à propos de l’installation et de l’utilisation d’Azuriom dans la [documentation](https://azuriom.com/fr/docs).',
      },
    },
  },
  {
    name: 'install',
    embed: {
      en: {
        title: 'Installation',
        message:
          'You can find information about the installation of Azuriom and its prerequisites in the [documentation](https://azuriom.com/en/docs/installation).',
        fields: [
          {
            name: 'For an installation on cPanel, a video is also available',
            value: 'https://youtu.be/Deb0PBKpar8',
          },
          {
            name:
              'If you encounter problems during installation, make sure to look at the common problems in the documentation.',
            value: 'https://azuriom.com/en/docs/troubleshooting',
          },
        ],
      },
      fr: {
        title: 'Installation',
        message:
          'Vous pouvez trouver des informations à propos de l’installation d’Azuriom et de ses pré-requis dans la [documentation](https://azuriom.com/en/docs/installation).',
        fields: [
          {
            name: 'Pour une installation sur cPanel, une vidéo est également disponible',
            value: 'https://youtu.be/Deb0PBKpar8',
          },
          {
            name:
              'Si vous rencontrez des problèmes lors de l’installation, pensez à regarder les problèmes courants dans la documentation.',
            value: 'https://azuriom.com/fr/docs/troubleshooting',
          },
        ],
      },
    },
  },
  {
    name: 'logs',
    embed: {
      en: {
        title: 'Logs',
        message:
          'In case of errors, please send the logs located in `storage/logs` folder in order to simplify troubleshooting!',
      },
      fr: {
        title: 'Logs',
        message:
          'En cas d’erreurs, envoyez les logs situés dans dans le dossier `storage/logs` afin de pouvoir simplifier la résolution du problème!',
      },
    },
  },
];
