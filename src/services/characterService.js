import http from './httpService';
import {apiUrl} from '../config.json';

const apiEndpoint = apiUrl + "/characters";

export function getCharacters(){
    return http.get(apiEndpoint);
}