import axios from 'axios';

export const saimeService = ( params: any) => {

  return axios({
    method: 'POST',
    url: `https://api.mppct.gob.ve/api/saime`,
    data: {params:{...params}}
  });
};
