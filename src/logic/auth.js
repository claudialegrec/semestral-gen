import axios from 'axios'

const URL = "http://2fb2-2806-2f0-3500-1992-3964-a29a-54cc-bdc7.ngrok.io/"; //ngrok
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