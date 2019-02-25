// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Order from 'src/models/order'

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
   * `POST` an `Order.Model` to confirm the order.
   */
  public postConfirm = async (orderID: string, order: Order.Model): Promise<void> => {
    return this.client.post(`orders/${orderID}/confirm`, order).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
