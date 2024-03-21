export function imagePathGenerator(
    path: string,
    option: "original" | "500" | "300"
) {
    return `https://image.tmdb.org/t/p/${option}${path}`;
}
