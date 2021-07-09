import { Client, Collection, Intents } from 'discord.js';
import AutoUploadListener from './listeners/AutoUploadListener';
import CommandsListener from './listeners/CommandsListener';
import LanguageSelectionListener from './listeners/LanguageSelectionListener';
import SuggestionsListener from './listeners/SuggestionsListener';
import Command from './commands/Command';
import SimpleCommand from './commands/SimpleCommand';
import commands from './commands/commands';
import config from '../config';

export default class AzuriomBot {
  public readonly client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
  });

  public readonly commands = new Collection<string, Command>();

  private running = false;

  public async start() {
    this.registerCommands();

    await this.client.login(config.token);

    this.running = true;

    this.registerListeners();

    this.client.user?.setActivity('https://azuriom.com');

    console.log(`Logged in as ${this.client.user?.tag}.`);

    process.on('exit', () => this.stop());
  }

  public stop() {
    if (!this.running) {
      return;
    }

    this.client.destroy();

    this.running = false;

    console.log('Good bye');
  }

  private registerListeners() {
    new AutoUploadListener(this).register();
    new CommandsListener(this).register();
    new LanguageSelectionListener(this).register();
    new SuggestionsListener(this).register();
  }

  private registerCommands() {
    commands.forEach((command) => {
      this.commands.set(
        command.name,
        new SimpleCommand(command.name, command.description, command.embed)
      );
    });

    this.client.once('ready', async () => {
      if (this.client.application) {
        await this.client.application.commands.set(this.commands.array());
      }
    });
  }
}
