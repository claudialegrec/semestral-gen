import axios from 'axios'

const URL = "http://9a09-2806-2f0-3500-1992-558b-9b4e-dba4-9562.ngrok.io ";

export default {
    API_POST(route, json, header){
        return axios({
            url: URL+route,
            method:'POST',
            data: json,
            headers: header
        })
    },
    
    API_GET(route, header){
        return axios({
            url: URL+route,
            method:'GET',
            headers: header
        })
    }

}