import { basicApi } from 'lib/config';

export const getDefaultErrorlist = async () => {
  try {
    const response = await basicApi.get(process.env.REACT_APP_getDefaultError);

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const postDetailErrorList = async data => {
  try {
    const response = await basicApi.post(
      process.env.REACT_APP_postErrorInfo,
      data
    );

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const postErrorDate = async data => {
  try {
    const response = await basicApi.post(
      process.env.REACT_APP_getDefaultError,
      data
    );

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const postDetailContentData = async data => {
  try {
    const response = await basicApi.post(
      process.env.REACT_APP_postDetatilContent,
      data
    );

    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
