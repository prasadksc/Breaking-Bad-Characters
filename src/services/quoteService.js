import http from './httpService';
import {apiUrl} from '../config.json';

const apiEndpoint = apiUrl + "/quotes";

export function getQuotes(){
    return http.get(apiEndpoint);
}