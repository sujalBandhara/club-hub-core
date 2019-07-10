import * as axios from 'axios';
import ClubHubClient from '../client';
import Club from '../models/club';
export default class ClubService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getClubs: () => axios.AxiosPromise<Club.UnprotectedModel[]>;
    getPublicClubInfo: (domain: string) => axios.AxiosPromise<Club.PublicClubInfo>;
}
