import Response from 'src/models/response';
import Request from 'src/models/request';
import ClubHubClient from '../client';
export default class PostService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getPosts: (postRequest: Request.GetQuery) => Promise<Response.Post>;
    getPost: (Id: string) => Promise<Response.Post>;
}
