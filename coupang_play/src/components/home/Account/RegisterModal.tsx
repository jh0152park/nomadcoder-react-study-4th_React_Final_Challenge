import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import UserInput from "./UserInput";
import { useForm } from "react-hook-form";
import ModalButton from "./ModalButton";

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface IUserInputFormProps {
    name: string;
    email: string;
}

export default function RegisterModal({ isOpen, onClose }: IModalProps) {
    const { register, handleSubmit, reset } = useForm<IUserInputFormProps>();

    function onRegisterButtonClick() {
        alert("Sumbit");
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
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
