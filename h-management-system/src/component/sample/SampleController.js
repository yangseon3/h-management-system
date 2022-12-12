import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export async function getErrorNotice() {
  // map화면에서 목적지 table을 보여주는

  try {
    const response = await axios.get('/api/monitoring-system/error-notice');

    if (response.status === 200) {
      return [false, response.data];
    } else {
      // console.log("[SampleController] getErrorNotice server error.\n");
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    // console.log("[SampleController] getErrorNotice error catch.\n" + e.message);
    return [true, e.message];
  }
}
