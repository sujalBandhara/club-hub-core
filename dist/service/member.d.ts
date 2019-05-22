import ClubHubClient from '../client';
import User from '../models/user';
import Response from '../models/response';
import Request from '../models/request';
export default class MemberService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMembers: (memberQuery: Request.Member) => Promise<Response.User>;
    getMemberById: (Id: string) => Promise<User.Model>;
    postMember: (member: User.Model) => Promise<void>;
    deleteMember: (Id: string) => Promise<void>;
}
