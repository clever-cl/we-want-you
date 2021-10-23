import { atom } from 'recoil';

export const isAuthenticated = atom ({
    key: "isAuthenticated",
    default: false,
});

export const spoRefreshToken = atom({
    key: "spoRefreshToken",
});

export const spoTokenResponse = atom ({
    key: "spoTokenResponse",
})