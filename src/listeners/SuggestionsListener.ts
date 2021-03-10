import { Message } from 'discord.js';
import Listener from './Listener';
import config from '../../config';

export default class SuggestionsListener extends Listener {
  public register() {
    this.client.on('message', this.onMessage);
  }

  private onMessage(message: Message) {
    if (message.author.bot || !config.channels.suggestions.includes(message.channel.id)) {
      return;
    }

    message.react('✅').then(() => message.react('❌'));
  }
}
