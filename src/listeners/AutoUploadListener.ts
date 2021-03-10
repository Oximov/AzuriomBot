import { Message, MessageAttachment, PartialMessage } from 'discord.js';
import axios from 'axios';
import Listener from './Listener';

const pasteUrl = 'https://paste.gg/p/anonymous/';
const pasteUploadUrl = 'https://api.paste.gg/v1/pastes';
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

        const result =
          fetchResponse.data.length > 1900
            ? await AutoUploadListener.upload(fetchResponse.data, message, attachment)
            : `\`\`\`${attachment.name?.split('.').pop() ?? ''}\n${fetchResponse.data}\n\`\`\``;

        message.channel
          .send(`:paperclip: (${message.author.tag}) ${attachment.name}: ${result}`)
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

  private static async upload(content: string, message: Message, attachment: MessageAttachment) {
    const date = new Date();
    date.setDate(date.getDate() + 15); // 15 days expiration

    return axios
      .post(pasteUploadUrl, {
        name: message.author.tag,
        expires: date.toISOString(),
        files: [
          {
            name: attachment.name ?? 'message.txt',
            content: {
              format: 'text',
              value: content,
            },
          },
        ],
      })
      .then((postResponse) => pasteUrl + postResponse.data.result.id);
  }
}
