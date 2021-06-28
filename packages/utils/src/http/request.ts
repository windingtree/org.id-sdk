import type { Method } from './codes';
import type {
  CancelTokenSource,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosTransformer
} from 'axios';
import axios from 'axios';
import { HttpError } from '../errors';
import {
  HTTP_STATUS,
  HTTP_METHODS
} from './codes';
import * as regexp from '../regexp';

export interface ExtraHeaders {
  [header: string]: string
}

export const createAuthBearerHeader = (jwt: string): ExtraHeaders => ({
  'Authorization': `Bearer ${jwt}`
});

// Send HTTP request
export const request = async (
  url: string,
  method: Method,
  data?: unknown,
  extraHeaders?: ExtraHeaders,
  timeout = 10000,
  transformResponse?: AxiosTransformer
): Promise<unknown> => {

  if (!regexp.uri.exec(url)) {
    throw new HttpError(
      `Request URL not matching well formed URI criteria: ${url}`,
      'BAD_REQUEST'
    );
  }

  if (!Object.keys(HTTP_METHODS).includes(method)) {
    throw new HttpError(
      `Request method not allowed: ${method}`,
      'BAD_REQUEST'
    );
  }

  // Configure connection timeout handler
  const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
  const connectionTimeout = setTimeout(
    () => cancelTokenSource
      .cancel(
        `Cannot connect to the source: ${url}`
      ),
    timeout
  );

  try {
    const request: AxiosRequestConfig = {
      url,
      method,
      timeout,
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip,deflate',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        ...(
          method !== 'get'
            ? { 'Content-Type': 'application/json' }
            : {}
        ),
        ...(
          extraHeaders
            ? extraHeaders
            : {}
        )
      },
      data,
      cancelToken: cancelTokenSource.token,
      transformResponse
    };

    const response: AxiosResponse = await axios(request);

    clearTimeout(connectionTimeout);

    return response.data;
  } catch (error) {

    clearTimeout(connectionTimeout);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      // Handle errors in the response data
      if (error.response.data && error.response.data.message) {
        error.message = error.response.data.message;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    throw new HttpError(
      error.message,
      HTTP_STATUS.BAD_GATEWAY
    );
  }
};
