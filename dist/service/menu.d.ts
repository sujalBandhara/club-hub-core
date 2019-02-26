import ClubHubClient from '../client';
import Order from '../models/order';
export default class MenuService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    postOrder: (order: Order.ProposedOrder) => Promise<Order.Model>;
    postConfirm: (orderID: string, order: Order.Model) => Promise<void>;
}
