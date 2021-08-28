export default [
  {
    name: 'ask',
    description: 'Explains how to ask a question.',
    embed: {
      en: {
        title: 'Ask your question',
        message:
          'When you have a question, **ask it directly** and **explain the problem clearly**!',
        fields: [
          {
            name: 'Don’t forget to read the documentation',
            value: 'https://azuriom.com/en/docs',
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
    description: 'Send the link of the FAQ.',
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
    description: 'Send the link of the documentation.',
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
    description: 'Send the link of the installation documentation.',
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
            name: 'If you encounter problems during installation, make sure to look at the common problems in the documentation.',
            value: 'https://azuriom.com/en/docs/troubleshooting',
          },
        ],
      },
      fr: {
        title: 'Installation',
        message:
          'Vous pouvez trouver des informations à propos de l’installation d’Azuriom et de ses pré-requis dans la [documentation](https://azuriom.com/fr/docs/installation).',
        fields: [
          {
            name: 'Pour une installation sur cPanel, une vidéo est également disponible',
            value: 'https://youtu.be/Deb0PBKpar8',
          },
          {
            name: 'Si vous rencontrez des problèmes lors de l’installation, pensez à regarder les problèmes courants dans la documentation.',
            value: 'https://azuriom.com/fr/docs/troubleshooting',
          },
        ],
      },
    },
  },
  {
    name: 'logs',
    description: 'Explains where are located the logs files.',
    embed: {
      en: {
        title: 'Logs',
        message:
          "In case of 500 error, please send the logs located in `storage/logs` folder in order to simplify troubleshooting! If the logs aren't created, check the permissions.",
      },
      fr: {
        title: 'Logs',
        message:
          "En cas d’erreur 500, envoyez les logs situés dans dans le dossier `storage/logs` afin de pouvoir simplifier la résolution du problème! Si aucun logs n'est créé, pensez à vérifier les permissions.",
      },
    },
  },
  {
    name: 'database',
    embed: {
      en: {
        title: 'Database connection problem',
        message:
          "If you have a 500 error, and the logs indicate \"Connection refused\" it means that the database connection identifier is not correct. To resolve this error is very simple, you just have to modify them in the file named \".env\" at the root of the site.",
      },
      fr: {
        title: 'Problème de connexion a la base de données',
        message:
          "Si vous avez une erreur 500, et que les logs indique \"Connection refused\" ça veut dire que les identifiant de connexion a la base de donnée ne sont pas correct. Pour résoudre cette erreur c'est très simple, il suffit de les modifier dans le fichier nommé \".env\" a la raçine du site.",
      },
    },
  },
];
