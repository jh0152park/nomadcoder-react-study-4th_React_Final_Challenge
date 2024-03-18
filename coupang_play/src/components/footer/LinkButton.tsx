import { Text } from "@chakra-ui/react";

interface IProps {
    title: string;
    href: string;
}

export default function LinkButton({ title, href }: IProps) {
    return (
        <Text
            color="#4299E1"
            _hover={{ cursor: "pointer" }}
            fontWeight="bold"
            as="a"
            target="_blank"
            href={href}
        >
            {title}
        </Text>
    );
}
