import { request } from 'lib/request';

//get marital status

export function getAllMaritalStatus({ params, authRequire }: any) {
    return request('/maritalStatus', {
      method: 'get',
      authRequire,
      params: params
    });
  }
  