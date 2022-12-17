import API from 'api';
import { basicApi } from 'lib/config';

export const LoginController = async data => {
  try {
    const response = await basicApi.post(API.postLoginInfo, data);

    if (response.status === 201) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
