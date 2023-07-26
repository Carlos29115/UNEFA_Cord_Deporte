import { request } from 'lib/request';

// 
export function sendEmailServices({ data, authRequire }: any) {
  return request('/recover', {
    method: 'post',
    authRequire,
    data: data
  });
}

//
export function resetPasswordServices({ data, authRequire }: any) {
  return request('/update-password', {
    method: 'post',
    authRequire,
    data: data
  });
}