import ClubHubClient from '../client';
import Club from 'src/models/club';
export default class ClubService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getClubs: () => Promise<Club.UnprotectedModel[]>;
}
