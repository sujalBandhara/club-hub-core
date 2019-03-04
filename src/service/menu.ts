// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Order from '../models/order'
import Response from '../models/response'
import Restaurant from  '../models/restaurant'

/**
 * Interface to the ClubHub `Menu` API.
 */
export default class MenuService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * `GET` all the restaurants for the logged in User's
   * club.
   */
  public getRestaurants = async (): Promise<Response.Restaurant> => {
    return this.client.get('restaurants').then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` the restaurant for the given Id.
   */
  public getRestaurant = async (Id: string): Promise<Restaurant.Model> => {
    return this.client.get(`restaurants/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` all the orders for the logged in user. 
   */
  public getOrders = async (): Promise<Order.Model[]> => {
    return this.client.get('orders').then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` a single order based on the given Id.
   */
  public getOrderWithId = async (Id: string): Promise<Order.Model> => {
    return this.client.get(`orders/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` a `ProposedOrder` to the server in order to get
   * tax, fees, and totalPrice. This object's Id will be used to
   * confirm the order.
   */
  public postOrder = async (order: Order.ProposedOrder): Promise<Order.Model> => {
    return this.client.post('orders', order).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `PUT` an update to an existing order.
   */
  public putOrder = async (order: Order.Model): Promise<any> => {
    return this.client.put(`orders/${order._id}`, order).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` an `Order.Model` to confirm the order.
   */
  public postConfirm = async (orderID: string, order: Order.Model): Promise<void> => {
    return this.client.post(`orders/${orderID}/confirm`, order).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
