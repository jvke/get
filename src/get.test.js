import get from './get';
import {
  MOCK_URL,
  MOCK_REQUEST,
  MALFORMED_URL
} from './mocks';

it('Handles `.then`', () => {
  expect.assertions(1);

  return expect(get(MOCK_URL, MOCK_REQUEST).then(res => res.foo)).resolves.toEqual('bar');
});

it('Handles `.catch`', () => {
  expect.assertions(1);

  return get(null, MOCK_REQUEST).catch(err =>
    expect(err).toEqual(MALFORMED_URL)
  );
});

it('Can be used with async/await', async () => {
  expect.assertions(1);

  const getFoo = url => get(url, MOCK_REQUEST).then(res => res.foo);
  const data = await getFoo(MOCK_URL);
  expect(data).toEqual('bar');
});

it('Catches rejects with async/await', async () => {
  expect.assertions(1);

  await expect(get(null, MOCK_REQUEST)).rejects.toEqual(MALFORMED_URL);
});

it('Handles `.then` data mutations', () => {
  expect.assertions(1);

  return expect(get(MOCK_URL, MOCK_REQUEST).then(res => 'Hello world'))
    .resolves
    .toEqual('Hello world');
});
