import { Message } from 'discord.js';
import Listener from './Listener';

export default class CommandsListener extends Listener {
  public register() {
    this.client.on('message', (message) => this.onMessage(message));
  }

  private async onMessage(message: Message) {
    if (message.author.bot || message.channel.type !== 'text') {
      return;
    }

    if (!message.content.startsWith('!')) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift();

    if (!commandName) {
      return;
    }

    const command = this.bot.commands.get(commandName);

    if (!command) {
      return;
    }

    try {
      command.execute(message, args);
    } catch (e) {
      console.error(e);
    }
  }
}
