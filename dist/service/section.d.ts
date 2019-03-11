import ClubHubClient from '../client';
import Section from '../models/section';
import Response from '../models/response';
export default class SectionService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getSections: () => Promise<Response.Section>;
    createSection: (section: Section.Model) => Promise<Section.Model>;
    updateSection: (section: Section.Model) => Promise<Section.Model>;
    deleteSection: (sectionID: string) => Promise<void>;
}
