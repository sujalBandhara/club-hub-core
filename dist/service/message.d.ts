import * as axios from 'axios';
import ClubHubClient from '../client';
import Message from '../models/message';
import Notification from '../models/notification';
import Request from '../models/request';
export default class MessageService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMessages: (messageRequest: Request.Message) => Promise<Message.Model>;
    postMessage: (message: Message.Model) => Promise<void>;
    putMessage: (message: Message.Model) => Promise<void>;
    deleteMessage: (message: Message.Model) => Promise<void>;
    getNotifications: (type: Message.DeliveryType) => Promise<axios.AxiosResponse<any>>;
    createNotification: (notif: Notification.Model) => Promise<axios.AxiosResponse<any>>;
    deleteNotification: (notificationID: string) => Promise<axios.AxiosResponse<any>>;
}
