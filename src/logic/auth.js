import axios from 'axios'

const URL = "http://673e-2806-2f0-3500-1992-a5d0-ddf0-9084-48a0.ngrok.io/"; //ngrok
// const URL = "http://localhost:3000";

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