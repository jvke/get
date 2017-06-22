export const MOCK_URL = 'http://www.mocky.io/v2/5185415ba171ea3a00704eed';

export const MALFORMED_URL = { error: 'Malformed URL' };

export const MOCK_REQUEST = (url, resolve, reject) => {
  setTimeout(() => {}, 250);
  if (!url) return reject(MALFORMED_URL);

  return resolve({
    'foo': 'bar'
  });
};
