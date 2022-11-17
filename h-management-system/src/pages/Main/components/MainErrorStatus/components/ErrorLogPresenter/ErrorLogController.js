import API from 'api';
import { basicApi } from 'lib/config';

export const AllError = async () => {
  try {
    const response = await basicApi.get(API.getAllError);
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
    const response = await basicApi.post(API.getDateError, data);
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
      `${API.getByTimeError}/${data.queryKey[1]}`
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
    const response = await basicApi.post(API.postByTimeError, data);
    console.log('실행되나');
    console.log(data);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
