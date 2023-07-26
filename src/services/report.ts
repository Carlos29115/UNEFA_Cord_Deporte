import { request } from 'lib/request';

//create Activities
export function generateReportServices({ params, authRequire }: any) {
  return request('/generate-report', {
    method: 'get',
    authRequire,
    params: params
  });
}
