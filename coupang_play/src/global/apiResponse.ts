/**
 **************************
 **************************
 **************************
 * Account's API Response *
 **************************
 **************************
 **************************
 */

export interface IUserHandlerResponse {
    name: string;
    email: string;
    isSuccess: boolean;
}

/**
 *************************
 *************************
 *************************
 * Movie's API Responses *
 *************************
 *************************
 *************************
 */

export interface IMovieResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IBelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface IGenresDetail {
    id: number;
    name: string;
}

interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface ICast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

interface ICrew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

export interface IVideoResult {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    type: string;
    published_at: string;
    id: string;
    size: number;
    official: boolean;
}

export interface IMovieListsResponse {
    results: IMovieResult[];
}

export interface IMovieDetailsResponse {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: IBelongsToCollection;
    budget: number;
    genres: IGenresDetail[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IImageResponse {
    aspect_ratio: number;
    height: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface IMovieCreditsResponse {
    id: number;
    cast: ICast[];
    crew: ICrew[];
}

export interface IMovieVideosResponse {
    id: number;
    results: IVideoResult[];
}

export interface IMovieImagesResponse {
    backdrops: IImageResponse[];
}

/**
 ***************************
 ***************************
 ***************************
 * TV Show's API Responses *
 ***************************
 ***************************
 ***************************
 */

export interface ITVResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
    name: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
}

interface ICreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
}

interface ILastEpisodeToAir {
    id: number;
    name: string;
    overview: string;
    air_date: string;
    episode_type: string;
    production_code: string;
    still_path: string;
    vote_average: number;
    vote_count: number;
    episode_number: number;
    runtime: number;
    season_number: number;
    show_id: number;
}

interface INetwork {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ISeason {
    air_date: string;
    name: string;
    overview: string;
    poster_path: string;
    id: number;
    episode_count: number;
    season_number: number;
    vote_average: number;
}

// 94954
export interface ITVListsResponse {
    results: ITVResult[];
    total_pages: number;
    total_results: number;
}

export interface ITVDetailsResponse {
    adult: boolean;
    backdrop_path: string;
    created_by: ICreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: IGenresDetail[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: ILastEpisodeToAir;
    name: string;
    next_episode_to_air: null | string;
    networks: INetwork;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    popularity: number;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    seasons: ISeason[];
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface ITVCreditsResponse {
    cast: ICast[];
    crew: ICrew[];
    id: number;
}

export interface ITVVideosResponse {
    id: number;
    results: IVideoResult[];
}

export interface ITVImagesResponse {
    backdrops: IImageResponse[];
}
