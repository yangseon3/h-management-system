export const ConvertStrYesterday = () => {
  let now = new Date();
  let year = now.getFullYear().toString();
  let month = ('0' + (now.getMonth() + 1)).slice(-2);
  let day = ('0' + (now.getDate() - 1)).slice(-2);
  let hours = ('0' + now.getHours()).slice(-2);
  let minutes = ('0' + now.getMinutes()).slice(-2);

  return `${year + '-' + month + '-' + day + 'T' + hours + ':' + minutes}`;
};

export default ConvertStrYesterday;
