import { Interaction, Message } from 'discord.js';
import Listener from './Listener';
import config from '../../config';

export default class CommandsListener extends Listener {
  private lastInfoTime = 0;

  public register() {
    this.client.on('messageCreate', (message) => this.onMessage(message));
    this.client.on('interactionCreate', (interaction) => this.onInteraction(interaction));
  }

  private async onMessage(message: Message) {
    if (message.author.bot || message.channel.type !== 'GUILD_TEXT') {
      return;
    }

    const content = message.content.toLowerCase();

    // 1 min cooldown
    if (content.includes('azurium') && Date.now() - this.lastInfoTime > 60_000) {
      this.lastInfoTime = Date.now();

      await message.reply({
        content:
          message.channel.parentId !== config.categories.fr
            ? "Hey, it's Azuri**o**m with an **o** and not an **u** :p"
            : "Hey, c'est Azuri**o**m avec un **o** et non un **u** :p",
        allowedMentions: { repliedUser: false },
      });
    }

    if (!content.startsWith('!')) {
      return;
    }

    const commandName = content.slice(1).split(/ +/).shift();

    if (commandName && this.bot.commands.has(commandName)) {
      await message.reply(
        message.channel.parentId !== config.categories.fr
          ? `This command was replaced by the command \`/${commandName}\` !`
          : `Cette commande a été remplacée par la commande \`/${commandName}\`!`
      );
    }
  }

  private async onInteraction(interaction: Interaction) {
    if (!interaction.isCommand()) {
      return;
    }

    const command = this.bot.commands.get(interaction.commandName);

    if (!command) {
      return;
    }

    try {
      command.execute(interaction);
    } catch (e) {
      console.error(e);
    }
  }
}
