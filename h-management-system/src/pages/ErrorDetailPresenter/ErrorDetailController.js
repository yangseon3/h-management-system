import API from 'api';
import axios from 'axios';
import { basicApi } from 'lib/config';

// export const getDefaultErrorlist = async () => {
//   try {
//     const response = await axios.get('data/ERROR.JSON');

//     if (response.status === 200) {
//       return [false, response.data];
//     } else {
//       return [response.data.error, response.data.message];
//     }
//   } catch (e) {
//     return [true, e.message];
//   }
// };
