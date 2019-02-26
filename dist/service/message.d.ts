import ClubHubClient from '../client';
import Message from '../models/message';
import Request from '../models/request';
import Response from '../models/response';
export default class MessageService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMessages: (messageRequest: Request.Message) => Promise<Response.Message>;
    postMessage: (message: Message.Model) => Promise<void>;
    putMessage: (message: Message.Model) => Promise<void>;
    deleteMessage: (message: Message.Model) => Promise<void>;
}
