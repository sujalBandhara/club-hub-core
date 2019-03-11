import ClubHubClient from '../client';
import User from '../models/user';
import Response from '../models/response';
export default class MemberService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMembers: () => Promise<Response.User>;
    getMemberById: (Id: string) => Promise<User.Model>;
    putMemberById: (Id: string, user: any) => Promise<User.Model>;
    postMember: (member: User.Model) => Promise<void>;
    deleteMember: (Id: string) => Promise<void>;
}
