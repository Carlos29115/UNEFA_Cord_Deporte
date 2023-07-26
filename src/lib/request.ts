// Vendors
// Constants
import { localToken, recoverToken } from 'constants/index';
import { RequestOptionsType } from 'interfaces/api';

// Utils
import { removeItemLocal, searchItemLocal } from 'utils/helpers';
import API from './api';

/**
 * Obtener headers
 * @param authRequired boolean
 * @returns headers
 */
const getHeaders = (authRequired: boolean) => {
  if (authRequired) {
    const authorization = searchItemLocal(localToken);
    const authorizationRecover = searchItemLocal(recoverToken);
    return authorization
      ? { Authorization: `${authorization}` }
      : authorizationRecover
        ? { Authorization: `${authorizationRecover}` }
        : {};
  }

  return {};
};

export type AxiosResult<T> = {
  responseType?: any;
  data?: T;
  error?: any;
  code?: string;
  status?: number | string;
};

/**
 * Función genérica para comunicarse con la API
 * @param url: string
 * @param options: RequestOptionsType
 * @returns Promise: <AxiosResult<T>>
 */
export const request = async <T = any>(
  url: string,
  options: RequestOptionsType = {}
): Promise<AxiosResult<T>> => {
  const {
    method = 'get',
    data = {},
    authRequire = false,
    params,
    headers = {}
  } = options;

  return await API.request<T>({
    url,
    params,
    method,
    data,
    headers: { ...getHeaders(authRequire), ...headers }
  });
};
