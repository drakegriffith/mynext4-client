import axios from "axios";

export let API_ONET;

export function init_api_onet(id) {
    const apiOption = {
        baseURL: `https://services.onetcenter.org/ws/mnm/careers/${id}/report`,
        timeout: 30000,
        
        
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'client=linkedin_company_myn',
            'Access-Control-Allow-Origin' : '*'
          }
    };
    API_ONET = axios.create(apiOption);

}