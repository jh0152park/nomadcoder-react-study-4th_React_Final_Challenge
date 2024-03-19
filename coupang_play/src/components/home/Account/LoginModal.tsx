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
import { MdOutlineEmail } from "react-icons/md";
import { FieldValues, useForm } from "react-hook-form";

import UserInput from "./UserInput";
import ModalButton from "./ModalButton";

import {
    IModalProps,
    IUserHandlerResponse,
    IUserInputFormProps,
    UserHandlerAPI,
} from "../../../global/api";

export default function LoginModal({ isOpen, onClose }: IModalProps) {
    const toast = useToast();
    const apiHandler = new UserHandlerAPI();
    const { register, handleSubmit, reset } = useForm<IUserInputFormProps>();

    const mutation = useMutation(apiHandler.login, {
        onMutate: () => {
            console.log(`start to login.`);
        },
        onSuccess: (result: IUserHandlerResponse) => {
            console.log("login mutation success");
            console.log(result);
            toast({
                status: "success",
                title: `${result.name}님 환영합니다`,
            });
            modalClose();
        },
        onError: (result: any) => {
            console.log("login error");
            console.log(result);
            toast({
                status: "error",
                title: "이메일을 확인해 주세요",
            });
        },
    });

    function onLoginButtonClick({ email }: FieldValues) {
        reset();
        mutation.mutate({ email });
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
                    노팡 로그인
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack
                        w="100%"
                        alignItems="center"
                        mb="30px"
                        as="form"
                        onSubmit={handleSubmit(onLoginButtonClick)}
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

                        <ModalButton
                            color="white"
                            hoverColor="white"
                            bg="blue.500"
                            hoverBg="blue.400"
                            border="none"
                            title="노팡플레이 로그인하기"
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
