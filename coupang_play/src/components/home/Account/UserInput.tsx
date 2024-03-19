import type { UseFormRegisterReturn } from "react-hook-form";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IProps {
    icon: IconType;
    placeholder: string;
    type: string;
    register: UseFormRegisterReturn;
}

export default function UserInput({
    icon,
    placeholder,
    type,
    register,
}: IProps) {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" pl="10px">
                <Icon as={icon} color="white" w="20px" h="20px" />
            </InputLeftElement>
            <Input
                pt="3px"
                pl="50px"
                placeholder={placeholder}
                type={type}
                color="white"
                _placeholder={{
                    color: "white",
                }}
                {...register}
            />
        </InputGroup>
    );
}
