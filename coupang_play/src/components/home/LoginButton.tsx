import { Center, Text, useDisclosure } from "@chakra-ui/react";
import RegisterModal from "./Account/RegisterModal";
import LoginModal from "./Account/LoginModal";

type TActions = "register" | "login";

interface IProps {
    title: string;
    border: string;
    bgColor: string;
    action: TActions;
}

export default function LoginButton({
    title,
    bgColor,
    border,
    action,
}: IProps) {
    const loginModal = useDisclosure();
    const registerModal = useDisclosure();

    function onButtonClick() {
        switch (action) {
            case "register":
                registerModal.onOpen();
                break;
            case "login":
                loginModal.onOpen();
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Center
                w="500px"
                h="40px"
                borderRadius="5px"
                color="white"
                bg={bgColor}
                border={border}
                fontWeight="bold"
                pt="3px"
                _hover={{
                    cursor: "pointer",
                }}
                onClick={onButtonClick}
            >
                <Text>{title}</Text>
            </Center>

            <RegisterModal
                isOpen={registerModal.isOpen}
                onClose={registerModal.onClose}
            />
            <LoginModal
                isOpen={loginModal.isOpen}
                onClose={loginModal.onClose}
            />
        </>
    );
}
