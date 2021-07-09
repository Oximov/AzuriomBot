import { CommandInteraction, MessageEmbed, TextChannel } from 'discord.js';
import Command from './Command';
import config from '../../config';

interface EmbedContent {
  title: string;
  message: string;
}

interface TranslatableEmbedContent {
  en: EmbedContent;
  fr: EmbedContent;
}

export default class SimpleCommand implements Command {
  private readonly embedContent: TranslatableEmbedContent;

  public readonly name: string;
  public readonly description: string;

  constructor(name: string, description: string, embedContent: TranslatableEmbedContent) {
    this.name = name;
    this.description = description;
    this.embedContent = embedContent;
  }

  execute(interaction: CommandInteraction) {
    if (!(interaction.channel instanceof TextChannel)) {
      return;
    }

    const locale = interaction.channel.parentId === config.categories.fr ? 'fr' : 'en';
    const embedContent = this.embedContent[locale];

    const embed = new MessageEmbed()
      .setTitle(embedContent.title)
      .setDescription(embedContent.message)
      .setColor('#004de6')
      .setFooter('Azuriom Discord Bot')
      .setTimestamp(new Date());

    if ('fields' in embedContent) {
      // @ts-ignore - TODO
      embed.addFields(embedContent.fields);
    }

    interaction.reply({ embeds: [embed] });
  }
}
