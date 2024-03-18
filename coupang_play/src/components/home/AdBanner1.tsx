import { HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function AdBanner1() {
    return (
        <HStack
            w="100%"
            h="585px"
            pr="30px"
            bg="linear-gradient(to bottom, rgb(9, 10, 19), rgb(11, 33, 74))"
            spacing="0"
            alignItems="center"
            justifyContent="center"
        >
            <Image
                w="455px"
                src="resources/images/home/banner2.png"
                objectFit="cover"
            />
            <VStack
                w="390px"
                h="115px"
                ml="260px"
                alignItems="flex-start"
                spacing="5px"
            >
                <Text fontSize="32px" fontWeight="bold">
                    오직 쿠팡플레이에서
                </Text>
                <Text fontSize="32px" fontWeight="bold">
                    즐길 수 있는 쿠플 시리즈 추천
                </Text>
                <Text mt="20px">
                    다양한 콘텐츠를 모바일, 태블릿, PC, TV로 언제 어디서든 시청
                </Text>
            </VStack>
        </HStack>
    );
}
