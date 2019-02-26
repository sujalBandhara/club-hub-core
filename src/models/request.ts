import Message from 'src/models/message'

namespace Request {

  export interface GetQuery {
    limit?: string
    offset?: string
    start?: string
    end?: string
  }

  export interface Event extends GetQuery {
    groupID: string
  }

  export interface Member extends GetQuery {
    clubID: string
  }

  export interface Message extends GetQuery {
    type: Message.DeliveryType
  }

}

export default Request
