module.exports = () => {
  let d = new Date();

  let year = d.getFullYear();
  let month = ('0' + (d.getMonth() + 1)).slice(-2);
  let day = ('0' + d.getDay()).slice(-2);
  let hours = ('0' + d.getHours()).slice(-2);
  let minutes = ('0' + d.getMinutes()).slice(-2);

  return year + '.' + month + '.' + day + '-' + hours + '.' + minutes;
};
