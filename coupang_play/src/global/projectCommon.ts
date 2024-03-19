import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "persist-atom-key",
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

type TCategory =
    | "TV"
    | "영화"
    | "스포츠"
    | "스토어"
    | "키즈"
    | "뉴스"
    | "찜한 콘텐츠";

type TCategories = {
    [key in TCategory]: string;
};

export const CATEGORIES_LINK: TCategories = {
    TV: "tv",
    영화: "movies",
    스포츠: "live",
    스토어: "buy",
    키즈: "kids",
    뉴스: "news",
    "찜한 콘텐츠": "mylist",
};
