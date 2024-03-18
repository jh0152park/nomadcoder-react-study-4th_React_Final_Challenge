import { Center, Text } from "@chakra-ui/react";

interface IProps {
    title: string;
    bgColor: string;
    border: string;
}

export default function LoginButton({ title, bgColor, border }: IProps) {
    return (
        <Center
            w="500px"
            h="40px"
            borderRadius="5px"
            color="white"
            bg={bgColor}
            border={border}
            pt="3px"
            _hover={{
                cursor: "pointer",
            }}
        >
            <Text>{title}</Text>
        </Center>
    );
}
