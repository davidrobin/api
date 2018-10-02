module.exports = (delimiter, string) => {
  const regEx = new RegExp('\\' + delimiter, 'g');
  let sanitizedString = string.replace(regEx, '');
  return sanitizedString;
};
