import { IImageResponse } from "./global/apiResponse";

export function imagePathGenerator(
    path: string,
    option: "original" | "500" | "300"
) {
    return `https://image.tmdb.org/t/p/${option}${path}`;
}

export function backdropParser(
    backdrops: IImageResponse[],
    backdrop: string,
    poster: string
) {
    const en = backdrops.filter((b) => b.iso_639_1 === "en");

    console.log("parser");
    console.log(backdrops);

    if (en.length > 0 && en[0].file_path) {
        return imagePathGenerator(en[0].file_path, "original");
    }
    if (backdrops.length > 0 && backdrops[0].file_path) {
        return imagePathGenerator(backdrops[0].file_path, "original");
    }

    return imagePathGenerator(backdrop || poster, "original");
}
