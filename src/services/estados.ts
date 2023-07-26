import { request } from 'lib/request';

// get all Activities
export function getEstadosServices({ params, authRequire }: any) {
  return request('/estados', {
    method: 'get',
    authRequire
  });
}

export function getMunicipioServices({ params, authRequire }: any) {
  return request('/municipios', {
    method: 'get',
    authRequire,
    params: params
  });
}
export function getParroquiaServices({ params, authRequire }: any) {
  return request('/parroquias', {
    method: 'get',
    authRequire,
    params: params
  });
}
