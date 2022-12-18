import { basicApi } from 'lib/config';

export const ErrorStatisticController = async () => {
  try {
    const response = await basicApi.get(process.env.REACT_APP_riskCount);

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
