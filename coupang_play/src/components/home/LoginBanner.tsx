import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import LoginButton from "./LoginButton";

export default function LoginBanner() {
    return (
        <Box
            w="100%"
            h="645px"
            position="relative"
            display="flex"
            justifyContent="flex-end"
        >
            <Box
                w="100%"
                h="120px"
                position="absolute"
                bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1))"
                top={0}
                zIndex={99}
            />

            <Image
                h="100%"
                src="/resources/images/home/banner1.jpg"
                objectFit="cover"
            />
            <VStack
                w="100%"
                h="100%"
                alignItems="flex-start"
                position="absolute"
                top="70px"
                left="195px"
            >
                <Image
                    w="245px"
                    src="/resources/images/common/logo.webp"
                    objectFit="cover"
                />
                <HStack
                    mt="50px"
                    alignItems="center"
                    justifyContent="center"
                    spacing="0"
                >
                    <Image
                        w="70px"
                        src="/resources/images/home/wow.png"
                        objectFit="cover"
                    />
                    <Text pt="2px" ml="3px" fontSize="24px">
                        쿠팡 와우회원 전용
                    </Text>
                </HStack>

                <VStack alignItems="flex-start" mt="15px" mb="70px">
                    <Text fontSize="58px" fontWeight="bold">
                        최신 영화, TV시리즈,
                    </Text>
                    <Text fontSize="58px" fontWeight="bold">
                        스포츠 중계를 모두 한 곳에서
                    </Text>
                </VStack>
                <VStack alignItems="flex-start">
                    <LoginButton
                        title="첫 달 무료로 시작하기"
                        border="none"
                        bgColor="linear-gradient(45deg, rgb(19, 90, 255), rgb(91, 173, 255))"
                    />
                    <Text color="gray" mt="25px" fontSize="14px">
                        이미 노마드 리액트 스터디 회원이라면?
                    </Text>
                    <LoginButton
                        title="와우회원 로그인"
                        border="1px solid white"
                        bgColor="black"
                    />
                </VStack>
            </VStack>
        </Box>
    );
}
