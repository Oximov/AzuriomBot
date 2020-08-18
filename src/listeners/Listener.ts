import { Client } from 'discord.js';
import AzuriomBot from '../AzuriomBot';

export default abstract class Listener {
  protected readonly bot: AzuriomBot;
  protected readonly client: Client;

  public constructor(bot: AzuriomBot) {
    this.bot = bot;
    this.client = bot.client;
  }

  public abstract register(): void;
}
