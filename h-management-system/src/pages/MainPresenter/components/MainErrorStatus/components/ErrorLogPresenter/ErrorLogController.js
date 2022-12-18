import { basicApi } from 'lib/config';

export const AllError = async () => {
  try {
    const response = await basicApi.get(process.env.REACT_APP_getAllError);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const PostDateError = async data => {
  try {
    const response = await basicApi.post(
      process.env.REACT_APP_getDateError,
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

export const ByTimeError = async data => {
  try {
    const response = await basicApi.get(
      `${process.env.REACT_APP_getByTimeError}/${data.queryKey[1]}`
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

export const PostByTimeError = async data => {
  try {
    const response = await basicApi.post(
      process.env.REACT_APP_postByTimeError,
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
