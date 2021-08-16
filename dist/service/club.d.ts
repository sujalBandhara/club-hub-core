import { AxiosPromise } from 'axios';
import ClubHubClient from '../client';
import Club from '../models/club';
export default class ClubService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getClubs: () => AxiosPromise<Club.UnprotectedModel[]>;
    getPublicClubInfo: (domain: string) => AxiosPromise<Club.PublicClubInfo>;
}
