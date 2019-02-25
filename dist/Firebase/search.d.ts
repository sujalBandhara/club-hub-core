/// <reference types="lunr" />
import * as lunr from 'lunr';
import { Member, Vehicle } from './types';
export declare type MembersByID = {
    [memberID: string]: Member;
};
export default class SearchIndex {
    index: lunr.Index;
    members: Member[];
    vehicles: Vehicle[];
    membersByMemberID: MembersByID;
    vehiclesByMemberID: {
        [memberID: string]: Vehicle[];
    };
    /**
     * Builds a new search index for the application.
     */
    BuildSearchIndex(isAdmin: boolean): Promise<any>;
    /**
     * Performs a search on the index.
     * @param searchTerm The search term to perform a search for.
     */
    Search(searchTerm: string): Member[];
    /**
     * Builds the search index.
     */
    private buildIndex();
    /**
     * Builds an object with members IDs keying members.
     */
    private buildMembersByMembersID();
    /**
     * Builds an object with member IDs keying vehicles.
     * @param vehicles
     */
    private buildVehiclesByMemberID();
    private static memberWithoutCar(member);
    private static memberWithCar(member, vehicle);
}
