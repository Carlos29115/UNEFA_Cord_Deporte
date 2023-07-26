import { request } from 'lib/request';

// get all Users
export function getAllUsersServices({ params, authRequire }: any) {
  const { skip, take } = params as any;

  return request('/users', {
    method: 'get',
    authRequire,
    params: { skip, take, ...params }
  });
}

//create Users
export function createUsersServices({ payload, authRequire }: any) {
  console.log('create', payload);
  return request('/users', {
    method: 'post',
    authRequire,
    data: payload
  });
}

export function updateUsersServices({ payload, authRequire, params }: any) {
  return request(`/users/${params}`, {
    method: 'put',
    authRequire,
    data: payload
  });
}

export function deleteUsersServices({ authRequire, params }: any) {
  return request(`/users/${params}`, {
    method: 'put',
    authRequire,
    data: { deleted: true }
  });
}
/* 

id: dataRow.row.id,
      profile: {
        firstName: dataRow?.row?.profile?.firstName,
        lastName: dataRow?.row?.profile?.lastName,
      },
      email: dataRow?.row?.email,
      identity: '',
      userRole: [
        {
          enteId: dataRow.row.userRole[0].enteId,
          ente: {
            name: dataRow.row.userRole[0].ente.name
          },
          roleId: dataRow.row.userRole[0].roleId,
          role: {
            name: dataRow.row.userRole[0].role.name
          }
        }
      ]

*/
