import { Emoji, MessageReaction, PartialUser, Snowflake, User } from 'discord.js';
import Listener from './Listener';
import config from '../../config';

export default class LanguageSelectionListener extends Listener {
  public register() {
    this.client.on('messageReactionAdd', this.onReactionAdd);
    this.client.on('messageReactionRemove', this.onReactionRemove);
  }

  private async onReactionAdd(message: MessageReaction, user: User | PartialUser) {
    if (user.bot || message.message.channel.id !== config.channels.welcome) {
      return;
    }

    const guild = message.message.guild;

    if (!guild) {
      return;
    }

    const member = await guild.members.fetch(user.id);
    const role = LanguageSelectionListener.getRoleByReaction(message.emoji);

    if (member && role) {
      await member.roles.add(role);
    }
  }

  private async onReactionRemove(message: MessageReaction, user: User | PartialUser) {
    if (user.bot || message.message.channel.id !== config.channels.welcome) {
      return;
    }

    const guild = message.message.guild;

    if (!guild) {
      return;
    }

    const member = await guild.members.fetch(user.id);
    const role = LanguageSelectionListener.getRoleByReaction(message.emoji);

    if (member && role) {
      await member.roles.remove(role);
    }
  }

  private static getRoleByReaction(emoji: Emoji): Snowflake | null {
    switch (emoji.name) {
      case '\uD83C\uDDEC\uD83C\uDDE7':
        return config.roles.en;
      case '\uD83C\uDDEB\uD83C\uDDF7':
        return config.roles.fr;
      default:
        return null;
    }
  }
}
