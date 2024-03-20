import axios from "axios";
import { QueryFunctionContext } from "react-query";

interface IRegisterProps {
    email: string;
    name: string;
}

interface ILoginProps {
    email: string;
}

export class UserHandlerAPI {
    public async register({ email, name }: IRegisterProps) {
        return (
            await axios.get(
                `${process.env.REACT_APP_USER_DB_URL}/register?email=${email}&name=${name}`
            )
        ).data;
    }

    public async login({ email }: ILoginProps) {
        return (
            await axios.get(
                `${process.env.REACT_APP_USER_DB_URL}/account?email=${email}`
            )
        ).data;
    }
}

/* eslint-disable */
export class MovieHandlerAPI {
    public async nowPlaying({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async popular({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async topRated({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async upcomming({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async details({ queryKey }: QueryFunctionContext) {
        const [_, id] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
        ).then((response) => response.json());
    }

    // actors list check
    public async credits({ queryKey }: QueryFunctionContext) {
        const [_, id] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
            options
        ).then((response) => response.json());
    }

    // official videos check
    public async videos({ queryKey }: QueryFunctionContext) {
        const [_, id] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            options
        ).then((response) => response.json());
    }
}

/* eslint-disable */
export class TVHandlerAPI {
    public async airingToday({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async onTheAir({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async popular({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async topRated({ queryKey }: QueryFunctionContext) {
        const [_, page] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`,
            options
        ).then((response) => response.json());
    }

    public async details({ queryKey }: QueryFunctionContext) {
        const [_, id] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
            options
        ).then((response) => response.json());
    }

    public async credits({ queryKey }: QueryFunctionContext) {
        const [_, id] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
            options
        ).then((response) => response.json());
    }

    public async videos({ queryKey }: QueryFunctionContext) {
        const [_, id] = queryKey;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzlhNzA4ODRhMTY2ZDQ2ODE0ZTYwNTMwMTU2OGQyZCIsInN1YiI6IjY0YmEyMDIwMzAwOWFhMDBlMjY0Y2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHILwGMMFNYioeUQaVUSgf_kU4PRKZP99iDQOHXQRpI",
            },
        };

        return fetch(
            `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
            options
        ).then((response) => response.json());
    }
}
