export const ConvertStrCurTime = () => {
  let now = new Date();
  let year = now.getFullYear().toString();
  let month = ('0' + (now.getMonth() + 1)).slice(-2);
  let day = ('0' + now.getDate()).slice(-2);
  let hours = ('0' + now.getHours()).slice(-2);
  let minutes = ('0' + now.getMinutes()).slice(-2);
  let seconds = ('0' + now.getSeconds()).slice(-2);

  return `${
    year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  }`;
};

export default ConvertStrCurTime;
