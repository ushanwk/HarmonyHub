import {apiRequest} from "../service/apiServices";

export async function search(artist) {
    const apiObject = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: { q: artist },
        headers: {
            'X-RapidAPI-Key': '53a6c8d528msh47cb5fcab43f9aep1371ffjsn74637cf64eb4',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }

    return apiRequest(apiObject);
}
