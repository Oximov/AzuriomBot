import { Message, PartialMessage } from 'discord.js';
import axios from 'axios';
import Listener from './Listener';

const pasteUrl = 'https://paste.azuriom.com';
const textExtensions = ['txt', 'json', 'yml', 'log', 'php', 'css', 'scss', 'js', 'ts', 'vue', 'md'];
const userAttachments: { [key: string]: string } = {};

export default class AutoUploadListener extends Listener {
  public register() {
    this.client.on('message', this.onMessage);
    this.client.on('messageDelete', this.onMessageDelete);
  }

  private onMessage(message: Message) {
    if (message.author.bot || message.channel.type !== 'text' || !message.attachments) {
      return;
    }

    message.attachments
      .filter((attachment) => attachment.size < 5000000) // 5 mb
      .filter((attachment) => textExtensions.includes(attachment.name?.split('.').pop() ?? ''))
      .each(async (attachment) => {
        const fetchResponse = await axios.get(attachment.url);
        const postResponse = await axios.post(`${pasteUrl}/documents`, fetchResponse.data);
        const url = `${pasteUrl}/${postResponse.data.key}.${
          attachment.name?.split('.').pop() ?? 'txt'
        }`;

        message.channel
          .send(`:paperclip: (${message.author.tag}) ${attachment.name}: ${url}`)
          .then((msg) => {
            userAttachments[message.id] = msg.id;
          });
      });
  }

  private onMessageDelete(message: Message | PartialMessage) {
    if (message.channel.type !== 'text' || !(message.id in userAttachments)) {
      return;
    }

    message.channel.messages.fetch(userAttachments[message.id]).then((msg) => msg.delete());

    delete userAttachments[message.id];
  }
}
