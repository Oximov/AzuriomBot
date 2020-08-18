import { Message } from 'discord.js';

export default interface Command {
  readonly name: string;

  execute(message: Message, args: string[]): void;
}
