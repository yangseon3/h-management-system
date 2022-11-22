import API from 'api';
import { basicApi } from 'lib/config';

export const GetKakaoData = async () => {
  try {
    const res = await basicApi(API.store);
    const data = await res.data;
    console.log(data);
    return data;
  } catch (err) {
    alert(err);
  }
};
