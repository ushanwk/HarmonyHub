import axios from "axios";

export const apiRequest = (apiObject) => {
    return axios({
        method: apiObject.method,
        url: apiObject.url,
        headers: apiObject.headers,
        params: apiObject.params,
    });
}
