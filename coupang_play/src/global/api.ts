import axios from "axios";
import Cookie from "js-cookie";
import { QueryFunctionContext } from "react-query";

interface IRegisterProps {
    email: string;
    name: string;
}

interface ILoginProps {
    email: string;
}

export interface IUserHandlerResponse {
    name: string;
    email: string;
    issuccess: boolean;
}

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface IUserInputFormProps {
    name: string;
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
