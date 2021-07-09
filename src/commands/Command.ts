import { CommandInteraction } from 'discord.js';

export default interface Command {
  readonly name: string;
  readonly description: string;

  execute(interaction: CommandInteraction): void;
}
