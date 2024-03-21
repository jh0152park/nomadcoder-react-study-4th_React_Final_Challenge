import { IImageResponse } from "./global/apiResponse";

export function imagePathGenerator(
    path: string,
    option: "original" | "500" | "300"
) {
    switch (option) {
        case "original":
            return `https://image.tmdb.org/t/p/original${path}`;
        case "300":
        case "500":
            return `https://image.tmdb.org/t/p/w${option}${path}`;
        default:
            return `https://image.tmdb.org/t/p/original${path}`;
    }
}

export function backdropParser(
    backdrops: IImageResponse[],
    backdrop: string,
    poster: string
) {
    const en = backdrops.filter((b) => b.iso_639_1 === "en");

    if (en.length > 0 && en[0].file_path) {
        return imagePathGenerator(en[0].file_path, "500");
    }
    if (backdrops.length > 0 && backdrops[0].file_path) {
        return imagePathGenerator(backdrops[0].file_path, "500");
    }

    return imagePathGenerator(backdrop || poster, "500");
}

export function goToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
