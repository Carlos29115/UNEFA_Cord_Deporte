import { request } from 'lib/request';

// get all Fundacites
export function getAllFundacitesServices({ params, authRequire }: any) {
  const { skip, take } = params as any;
  return request(`/responsibles-entes/${params.id}`, {
    method: 'get',
    authRequire,
    params: { skip, take, ...params }
  });
}

//create Fundacites
export function createFundacitesServices({ payload, authRequire }: any) {
  console.log('create', payload);
  return request('/responsibles-entes', {
    method: 'post',
    authRequire,
    data: payload
  });
}

export function updateFundacitesServices({
  payload,
  authRequire,
  params
}: any) {
  return request(`/responsibles-entes/${params}`, {
    method: 'put',
    authRequire,
    data: payload
  });
}

export function deleteFundacitesServices({ authRequire, params }: any) {
  return request(`/responsibles-entes/${params}`, {
    method: 'put',
    authRequire,
    data: { deleted: true }
  });
}
