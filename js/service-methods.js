// THESE ARE GENERATED FILES - DO NOT EDIT 
// PLEASE MODIFY THE TYPESCRIPT SOURCE FILES

import axios from 'axios';
export function getService(url) {
    return axios.get(url)
        .then(res => res.data)
        .catch(e => e);
}
export function postService(url, body) {
    return axios.post(url, body)
        .then(res => res.data)
        .catch(e => e);
}
export const service = {
    get: getService,
    post: postService
};
