/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import ApiError from '../errors/ApiError';
import ErrorTypes from '../errors/models/ErrorTypes';
import HttpStatusCodes from './models/HttpStatusCodes';

/**
 * Basic HTTP client.
 * @see https://levelup.gitconnected.com/enhance-your-http-request-with-axios-and-typescript-f52a6c6c2c8e
 * @see https://levelup.gitconnected.com/use-case-of-singleton-with-axios-and-typescript-da564e76296
 */
abstract class HttpClient {
  public readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected handleResponse = ({ data }: AxiosResponse): any => data;

  protected handleError = (error: AxiosError): Promise<never> => {
    const httpStatus = error?.response?.status;

    switch (httpStatus) {
      case HttpStatusCodes.UNAUTHORIZED:
        throw new ApiError(error, 'You are either not logged in or not authorized to do this action.', ErrorTypes.WARNING);
        break;
      case HttpStatusCodes.NOT_FOUND:
        throw new ApiError(error, 'The resource you are looking does not exist.');
        break;
      case HttpStatusCodes.FORBIDDEN:
        throw new ApiError(error, 'You are not allowed to access this resource.');
        break;
      case HttpStatusCodes.UNPROCESSABLE_ENTITY:
        // This case should be handled at the forms
        break;
      default:
        throw new ApiError(error, 'An unknow error occurred.');
        break;
    }

    return Promise.reject(error);
  }

  query(resource: string, config?: AxiosRequestConfig): Promise<any> {
    return this.instance.get(resource, config);
  }

  get(resource: string, slug = ''): Promise<any> {
    return this.instance.get(`${resource}/${slug}`);
  }

  post(resource: string, data: unknown): Promise<any> {
    return this.instance.post(`${resource}`, data);
  }

  update(resource: string, slug = '', data: unknown): Promise<any> {
    return this.instance.patch(`${resource}/${slug}`, data);
  }

  put(resource: string, data: unknown): Promise<any> {
    return this.instance.put(`${resource}`, data);
  }

  delete(resource: string): Promise<any> {
    return this.instance.delete(resource);
  }
}

export default HttpClient;
