import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";

import { useMutation } from "react-query";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FieldValues, useForm } from "react-hook-form";

import UserInput from "./UserInput";
import ModalButton from "./ModalButton";

import { IUserHandlerResponse, UserHandlerAPI } from "../../../global/api";

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface IUserInputFormProps {
    name: string;
    email: string;
}

export default function RegisterModal({ isOpen, onClose }: IModalProps) {
    const toast = useToast();
    const apiHandler = new UserHandlerAPI();
    const { register, handleSubmit, reset } = useForm<IUserInputFormProps>();

    const mutation = useMutation(apiHandler.register, {
        onMutate: () => {
            // console.log(`start to register account.`);
        },
        onSuccess: (result: IUserHandlerResponse) => {
            // console.log("register mutation success");
            // console.log(result);
            toast({
                status: "success",
                title: `${result.name}님 환영합니다`,
            });
        },
        onError: (result: any) => {
            console.log("register error");
            console.log(result);
            toast({
                status: "error",
                title: "잠시 후 다시 시도해주세요",
            });
        },
    });

    function onRegisterButtonClick({ email, name }: FieldValues) {
        reset();
        mutation.mutate({ email, name });
    }

    function modalClose() {
        reset();
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={modalClose}
            isCentered
            motionPreset="slideInBottom"
            size="xl"
        >
            <ModalOverlay />
            <ModalContent bg="black" w="100%">
                <ModalHeader fontWeight="bold" fontSize="25px">
                    노팡 회원가입
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        w="100%"
                        alignItems="center"
                        mb="30px"
                        as="form"
                        onSubmit={handleSubmit(onRegisterButtonClick)}
                    >
                        <Text fontWeight="bold" fontSize="30px" mb="30px">
                            noupang
                        </Text>

                        <UserInput
                            icon={MdOutlineEmail}
                            placeholder="노팡 아이디(이메일) 입력"
                            type="email"
                            register={register("email", { required: true })}
                        />

                        <UserInput
                            icon={FaRegUser}
                            placeholder="이름 입력"
                            type="text"
                            register={register("name", { required: true })}
                        />

                        <ModalButton
                            color="white"
                            hoverColor="white"
                            bg="blue.500"
                            hoverBg="blue.400"
                            border="none"
                            title="노팡플레이 회원가입하기"
                            type="submit"
                            loading={mutation.isLoading}
                        />

                        <ModalButton
                            color="black"
                            hoverColor="white"
                            bg="white"
                            hoverBg="black"
                            border="1px solid white"
                            title="취소하기"
                            onClickFunc={onClose}
                        />
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
