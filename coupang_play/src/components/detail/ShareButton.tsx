import { Center, Icon, Text, VStack } from "@chakra-ui/react";
import { IoMdShare } from "react-icons/io";

export default function ShareButton() {
    return (
        <VStack
            ml="25px"
            alignItems="center"
            _hover={{
                cursor: "pointer",
            }}
        >
            <Center
                w="30px"
                h="30px"
                border="1px solid white"
                borderRadius="50%"
            >
                <Icon as={IoMdShare} w="15px" h="15px" color="white" />
            </Center>
            <Text fontSize="12px">공유</Text>
        </VStack>
    );
}
