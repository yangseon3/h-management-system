import API from 'api';
import { basicApi } from 'lib/config';

export const GetMapLog = async data => {
  try {
    const mapId = data.queryKey[1];

    const response = await basicApi.get(`${API.getByMapLog}/${mapId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const GetRobotLog = async data => {
  try {
    const mapId = data.queryKey[1];
    const response = await basicApi.get(`${API.getByRobotLog}/${mapId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const GetUserLog = async data => {
  try {
    const mapId = data.queryKey[1];
    const response = await basicApi.get(`${API.getByUserLog}/${mapId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const PostErrorLog = async data => {
  try {
    const dataMapId = data.mapId;
    const response = await basicApi.post(
      `${API.postByErrorLog}/${dataMapId}`,
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

export const PostServingLog = async data => {
  try {
    const dataMapId = data.mapId;
    const response = await basicApi.post(
      `${API.postByServingLog}/${dataMapId}`,
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

export const PostRobotLog = async data => {
  try {
    const dataMapId = data.mapId;
    const response = await basicApi.post(
      `${API.postByRobotLog}/${dataMapId}`,
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
