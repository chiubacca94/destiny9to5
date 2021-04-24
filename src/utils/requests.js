const BUNGIE_PLATFORM_URI = "https://www.bungie.net/Platform";


fetch(BUNGIE_PLATFORM_URI + '/Destiny2/1/Profile/4611686018471460221/?components=200')
  .then(response => response.json())
  .then(data => console.log(data));


  export const GetCharactersForCurrrentUser = async (access = false) =>
    apiRequest('/Platform/User/GetMembershipsForCurrentUser/', {
    withAuth: false,
    headers: {
      Authorization: access && `Bearer ${access}`
    }
  });
