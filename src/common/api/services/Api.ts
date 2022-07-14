import { AxiosRequestConfig } from 'axios';
import HttpClient from '../HttpClient';

class Api extends HttpClient {
  private static classInstance?: Api;

  private constructor() {
    super(new URL('/rest/v1', process.env.VUE_APP_API_URL).href);

    this.initializeRequestInterceptor();
  }

  public static getInstance(): Api {
    if (!this.classInstance) {
      this.classInstance = new Api();
    }

    return this.classInstance;
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    if (!config?.headers) {
      throw new Error('Expected \'config\' and \'config.headers\' to be defined.');
    }

    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${process.env.VUE_APP_SUPABASE_KEY}`;
    // eslint-disable-next-line no-param-reassign
    config.headers.apikey = process.env.VUE_APP_SUPABASE_KEY;

    return config;
  };
}

export default Api;
