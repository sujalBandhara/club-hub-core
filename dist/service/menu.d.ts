import ClubHubClient from '../client';
import Order from '../models/order';
import Response from '../models/response';
import Restaurant from '../models/restaurant';
export default class MenuService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getRestaurants: () => Promise<Response.Restaurant>;
    getRestaurant: (Id: string) => Promise<Restaurant.Model>;
    getOrders: () => Promise<Order.Model[]>;
    getOrderWithId: (Id: string) => Promise<Order.Model>;
    postOrder: (order: Order.ProposedOrder) => Promise<Order.Model>;
    putOrder: (order: Order.Model) => Promise<any>;
    postConfirm: (orderID: string, order: Order.Model) => Promise<void>;
}
