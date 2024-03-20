export function imagePathGenerator(path: string, option: "original" | "500") {
    return `https://image.tmdb.org/t/p/${option}/${path}`;
}
