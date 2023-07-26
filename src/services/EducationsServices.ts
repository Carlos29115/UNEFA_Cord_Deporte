import { request } from 'lib/request';

// get all Activities
export function getAllEducationsServices({ authRequire }: any) {
  return request('/nivel-educativo', {
    method: 'get',
    authRequire,
  });
}
