import ClubHubClient from '../client';
import Message from 'src/models/message';
import Request from 'src/models/request';
export default class MessageService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMessages: (messageRequest: Request.Message) => Promise<Message.Model>;
    postMessage: (message: Message.Model) => Promise<void>;
    putMessage: (message: Message.Model) => Promise<void>;
    deleteMessage: (message: Message.Model) => Promise<void>;
}
