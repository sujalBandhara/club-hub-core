import ClubHubClient from '../client';
import User from '../models/user';
export default class MemberService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMemberById: (Id: string) => Promise<User.Model>;
    postMember: (member: User.Model) => Promise<void>;
    deleteMember: (Id: string) => Promise<void>;
}
