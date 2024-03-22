import { Center, Icon, Text, VStack, useToast } from "@chakra-ui/react";
import { IoMdShare } from "react-icons/io";

export default function ShareButton() {
    const toast = useToast();

    async function handleURLCopyToClipBoard() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast({
                status: "success",
                title: "링크가 복사되었습니다",
            });
        } catch {
            toast({
                status: "error",
                title: "링크복사에 실패했습니다",
            });
        }
    }

    return (
        <VStack
            ml="25px"
            alignItems="center"
            _hover={{
                cursor: "pointer",
            }}
            onClick={handleURLCopyToClipBoard}
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
