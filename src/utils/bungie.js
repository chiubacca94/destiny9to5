export const SETTINGS = {
    PLATFORM_URL: "https://www.bungie.net/Platform",
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    API_KEY: process.env.API_KEY
}

export const bungieLogin = () => {
    var OAUTH_PATH = 'https://www.bungie.net/en/oauth/authorize?response_type=code&client_id=36127';
    fetch(OAUTH_PATH)
    .then(res => {
        return res;
    })
} 

const publicBungieRequest = (path, options={}) => {
    const headers = {
        "x-api-key": SETTINGS.API_KEY,

    }

    fetch(SETTINGS.PLATFORM_URL + path, headers)
    .then(res => {})
}

const privateBungieRequest = (path, options={}) => {
    const headers = {
        "x-api-key": SETTINGS.API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    fetch(SETTINGS.PLATFORM_URL + path, headers)
    .then(res => {})
}

export const testBungie = () => {
    return "PLEASE SIGN IN with: " + publicBungieRequest(); ;
};
  
export const GetMembershipDataForCurrentUser = async (access = false) =>
    privateBungieRequest('/Platform/User/GetMembershipsForCurrentUser/', {
        type: "GET",
        headers: {
            Authorization: access && `Bearer ${access}`
        }
    });