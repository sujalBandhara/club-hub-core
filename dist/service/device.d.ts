import ClubHubClient from "../client";
export default class DeviceService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    postDevice: (oneSignalID: string) => Promise<void>;
}
