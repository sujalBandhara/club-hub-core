import Response from '../models/response';
import Request from '../models/request';
import ClubHubClient from '../client';
export default class PostService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getPosts: (postRequest: Request.GetQuery) => Promise<Response.Post>;
    getPost: (Id: string) => Promise<Response.Post>;
}
