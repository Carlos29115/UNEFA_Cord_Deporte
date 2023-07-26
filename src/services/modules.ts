import { request } from 'lib/request';

// get all Activities
export function getAllModulesServices({ params, authRequire }: any) {
  return request('/modules', {
    method: 'get',
    authRequire,
    params: params
  });
}
