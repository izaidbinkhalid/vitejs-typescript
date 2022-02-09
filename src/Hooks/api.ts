// export const API_URL = "https://cors-anywhere.herokuapp.com/https://server.sailspad.com";
export const API_URL = "https://server.sailspad.com";
// export const API_URL = "http://localhost:8080";
export const getAccessToken = (): string => {
    const token = localStorage.getItem("access_token");
    if (token) return token;
    return "";
};

export const getRefreshToken = (): string => {
    const token = localStorage.getItem("refresh_token");
    if (token) return token;
    return "";
};
