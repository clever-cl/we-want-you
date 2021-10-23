import apiCall from '../api';

const commondParams = {
    redirect_uri : process.env.REACT_APP_CALLBACK_HOST,
    client_id : process.env.REACT_APP_CLIENT_ID,
    client_secret : process.env.REACT_APP_CLIENT_SECRET
}

export const spoAuthCall = async (requiredParams) => {
    try {
        const params = {
            ...requiredParams,
            grant_type : "authorization_code",
            ...commondParams,
        }
        const searchParams = Object.keys(params).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");
        const spoCall = await apiCall({
            method: "POST",
            url: "https://accounts.spotify.com/api/token",
            body: searchParams,
            headers: { "Content-type": "application/x-www-form-urlencoded" },
        });
        return await spoCall.json();
    } catch (error) {
        console.log(error);
    };  
};