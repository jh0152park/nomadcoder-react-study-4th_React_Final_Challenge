// .**eslintignore**
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
}
