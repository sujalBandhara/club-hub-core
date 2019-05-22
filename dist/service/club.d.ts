import ClubHubClient from '../client';
import Club from '../models/club';
export default class ClubService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getClubs: () => Promise<Club.UnprotectedModel[]>;
    getPublicClubInfo: (domain: string) => Promise<Club.PublicClubInfo>;
}
