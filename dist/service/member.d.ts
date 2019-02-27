import ClubHubClient from 'src/client';
import User from 'src/models/user';
import Response from 'src/models/response';
import Request from 'src/models/request';
export default class MemberService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getMembers: (memberQuery: Request.Member) => Promise<Response.User>;
    getMemberById: (Id: string) => Promise<User.Model>;
    postMember: (member: User.Model) => Promise<void>;
    deleteMember: (Id: string) => Promise<void>;
}
