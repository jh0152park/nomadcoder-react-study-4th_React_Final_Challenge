import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "jh0152_coupangplayer_atom_key",
    storage: localStorage,
});

export const IS_USER_LOGIN = atom({
    key: "IS_USER_LOGIN",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const USER_NAME = atom({
    key: "USER_NAME",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const CATEGORIES_LINK = new Map([
    ["TV", "tv"],
    ["영화", "movies"],
    ["스포츠", "live"],
    ["스토어", "buy"],
    ["키즈", "kids"],
    ["뉴스", "news"],
    ["찜한 콘텐츠", "mylist"],
]);

export const CURRENT_CATEGORY = atom({
    key: "CURRENT_CATEGORY",
    default: "영화",
    effects_UNSTABLE: [persistAtom],
});

export let CATEGORIES: string[] = [];
CATEGORIES_LINK.forEach((value, key) => CATEGORIES.push(key));

export const SlideVariants = {
    start: (direction: number) => ({
        x: (window.outerWidth + 5) * direction,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: (-window.outerWidth - 5) * direction,
    }),
};

export const BasicInformation = atom<any>({
    key: "BasicInformation",
    default: [],
});

export const DetailInformation = atom<any>({
    key: "DetailInformation",
    default: [],
});

export const CreditInformation = atom<any>({
    key: "CreditInformation",
    default: [],
});

export const VideoInformation = atom<any>({
    key: "VideoInformation",
    default: [],
});

export const LogoInformation = atom<any>({
    key: "LogoInformation",
    default: [],
});

export const FAVORITE_MOVIES = atom({
    key: "FAVORITE_MOVIES",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const FAVORITE_TVS = atom({
    key: "FAVORITE_TVS",
    default: [],
    effects_UNSTABLE: [persistAtom],
});
