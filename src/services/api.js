// Aqui irão as configurações do Axios

import axios from 'axios';

const url = 'https://dev-api.kuppi.com.br/example/products' 
const key = 'IaUqWMozCH2E1kJssZ5GkjYw5FIWsBTCMunG6Isp3x7sROSTwJfflM458mQuOEYWfydEI3UrRWRYJRpDBoz5uATmmKuzGSgebAvd'

const kuppiApi = {

    async getProducts(){
        return await axios({
            method: "GET",
            url: url,
            headers: {'auth-token': key}
        })
    },

    async getItem(id){
        return await axios({
            method: "GET",
            url: `${url}/${id}`,
            headers: {'auth-token': key}
        })
    }

}

export default kuppiApi;