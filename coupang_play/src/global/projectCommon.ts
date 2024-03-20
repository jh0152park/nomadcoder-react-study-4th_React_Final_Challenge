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

export const MOVIE_GENRES = new Map([
    [28, "Action"],
    [12, "Adventure"],
    [16, "Animation"],
    [35, "Comedy"],
    [80, "Crime"],
    [99, "Documentary"],
    [18, "Drama"],
    [10751, "Family"],
    [14, "Fantasy"],
    [36, "History"],
    [27, "Horror"],
    [10402, "Music"],
    [9648, "Mystery"],
    [10749, "Romance"],
    [878, "Science Fiction"],
    [10770, "TV Movie"],
    [53, "Thriller"],
    [10752, "War"],
    [37, "Western"],
]);
