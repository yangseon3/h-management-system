import API from 'api';
import { basicApi } from 'lib/config';

export const GetKakaoData = async () => {
  try {
    const response = await basicApi.get(API.store);

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
