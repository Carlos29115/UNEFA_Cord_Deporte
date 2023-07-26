import { request } from 'lib/request';

// get all Activities
export function getLoginServices({ data, authRequire }: any) {
  return request('/singin', {
    method: 'post',
    authRequire,
    data: data
  });
}

//register
export function getRegisterServices({ datos, authRequire }: any) {
  console.log(datos)
  return request('/singup', {
    method: 'post',
    authRequire,
    data: datos
  });
}
