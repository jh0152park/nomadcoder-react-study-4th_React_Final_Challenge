import { Center } from "@chakra-ui/react";

export default function NewestBadge() {
    return (
        <Center
            w="35px"
            h="30px"
            fontSize="13px"
            bgColor="black"
            border="1px solid gray"
            position="absolute"
            top="5px"
            left="5px"
            borderRadius="5px"
            fontWeight="bold"
        >
            <span style={{ color: "rgb(45, 184, 255)" }}>신규</span>
        </Center>
    );
}
