import { Message, MessageEmbed, TextChannel } from 'discord.js';
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

  constructor(name: string, embedContent: TranslatableEmbedContent) {
    this.name = name;
    this.embedContent = embedContent;
  }

  execute(message: Message, args: string[]) {
    if (!(message.channel instanceof TextChannel)) {
      return;
    }

    const locale = message.channel.parentID === config.categories.fr ? 'fr' : 'en';
    const embedContent = this.embedContent[locale];

    const embed = new MessageEmbed()
      .setTitle(embedContent.title)
      .setDescription(embedContent.message)
      .setColor('#004de6')
      .setFooter('Azuriom Discord Bot');

    message.channel.send(embed);
  }
}
