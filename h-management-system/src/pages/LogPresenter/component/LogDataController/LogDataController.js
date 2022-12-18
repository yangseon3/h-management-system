import { basicApi } from 'lib/config';

export const GetMapLog = async data => {
  try {
    const mapId = data.queryKey[1];

    const response = await basicApi.get(
      `${process.env.REACT_APP_getByMapLog}/${mapId}`
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

export const GetRobotLog = async data => {
  try {
    const mapId = data.queryKey[1];
    const response = await basicApi.get(
      `${process.env.REACT_APP_getByRobotLog}/${mapId}`
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

export const GetUserLog = async data => {
  try {
    const mapId = data.queryKey[1];
    const response = await basicApi.get(
      `${process.env.REACT_APP_getByUserLog}/${mapId}`
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

export const PostErrorLog = async data => {
  try {
    const dataMapId = data.mapId;
    const response = await basicApi.post(
      `${process.env.REACT_APP_postByErrorLog}/${dataMapId}`,
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
      `${process.env.REACT_APP_postByServingLog}/${dataMapId}`,
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
      `${process.env.REACT_APP_postByRobotLog}/${dataMapId}`,
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
