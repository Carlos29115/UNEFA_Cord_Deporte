import { AxiosRequestConfig } from 'axios';

export interface RequestOptionsType extends AxiosRequestConfig {
  authRequire?: boolean;
}

export interface ThunkAPI {
  dispatch: Function;
  extra?: any;
  requestId: string;
  signal: AbortSignal;
}

export interface iRequest {
  payload?: Record<string, any>;
  params?: Record<string, any>;
  authRequire?: boolean;
}
