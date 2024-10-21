import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const spyCreate = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi('/posts');

    jest.runAllTimers();
    expect(spyCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const spyGet = jest.spyOn(axios.Axios.prototype, 'get');
    await throttledGetDataFromApi('/posts');

    jest.runAllTimers();
    expect(spyGet).toHaveBeenCalledTimes(1);
  });

  test('should return response data', async () => {
    const respData = {
      resp1: 1,
      resp2: 2,
      resp3: 3,
    };

    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValue({ data: respData });
    const response = await throttledGetDataFromApi('/posts');

    expect(response).toBe(respData);
  });
});