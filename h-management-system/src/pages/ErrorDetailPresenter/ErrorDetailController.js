import API from 'api';
import { basicApi } from 'lib/config';

export const postErrorData = async data => {
  try {
    const response = await basicApi.post(API.postErrorInfo, data);

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
