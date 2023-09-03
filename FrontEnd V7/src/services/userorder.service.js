import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { authHeader } from './base.service';
const API_URL = BASE_API_URL + '/order/user';


class UserOrderService {

  saveOrder(id,address) {
    return axios.post(API_URL+`/${id}`, address, { headers: authHeader() });
  }

  getMyOrders(id) {
    return axios.get(API_URL+`/${id}` , { headers: authHeader() })
  }

  cancelMyOrder(id) {
    console.log("in Method"+authHeader())
    return axios.put(API_URL+`/cancel/${id}` , id,{ headers: authHeader() })
  }

  



}

export default new UserOrderService();
// import { BASE_API_URL } from '../common/constants';
// import axios from 'axios';
// import { authHeader, authImageHeader } from './base.service';

// const ADMIN_API_URL = BASE_API_URL + '/order/admin';

// class UserOrderService {

//   getAllOrders() {
//     return axios.get(ADMIN_API_URL , { headers: authHeader() })
//   }

//   updateOrderStatus(orderStatusDTO){
//     return axios.put(ADMIN_API_URL , orderStatusDTO , { headers: authHeader() })
//   }

// }

// export default new UserOrderService();