import ClubHubClient from '../client';
import Session from '../models/session';
import User from '../models/user';
export default class UserService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    login: (email: string, password: string, clubName: string) => Promise<Session.Login>;
    getState: () => Promise<Session.State>;
    postSubDocument: (userId: string, path: string, data: object) => Promise<User.Model>;
    putSubDocument: (userId: string, path: string, data: object) => Promise<User.Model>;
    deleteSubDocument: (userId: string, path: string, data: object) => Promise<User.Model>;
}
