import axios from 'axios';

export async function getInitRobot(userId, robotId) {
  try {
    const response = await axios.get(
      '/api/robot/initialize/' + userId + '/' + robotId
    );
    return [response.data.error, response.data.message];
  } catch (e) {
    return [true, e.message];
  }
}
export async function getHomeRobot(userId, robotId) {
  try {
    const response = await axios.get('/api/robot/to-home/' + userId);
    let error = response.data.error;

    if (error) {
      return [error, response.data.message];
    } else {
      let mapName = response.data.map_name;
      let postError = postButton([0, mapName, robotId]);
      return [postError, response.status];
    }
  } catch (e) {
    return [true, e.message];
  }
}
function postButton(params) {
  try {
    const response = axios.post({
      url: '/api/mqtt/button',
      data: {
        table_id: params[0],
        map_name: params[1],
        call_type: 'serving',
        robot_id: params[2],
      },
    });

    return false;
  } catch (e) {
    return true;
  }
}
