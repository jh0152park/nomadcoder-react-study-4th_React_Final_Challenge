import IconAndTitle from "./IconAndTitle";

import { MdOutlineDevices } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { FiBookOpen, FiDownload } from "react-icons/fi";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function AdBanner2() {
    return (
        <Box
            w="100%"
            h="715px"
            display="flex"
            justifyContent="flex-end"
            position="relative"
        >
            <Image
                h="100%"
                src="/resources/images/home/banner3.png"
                objectFit="cover"
            />
            <VStack
                alignItems="flex-start"
                w="700px"
                h="100%"
                position="absolute"
                top={0}
                left={0}
                pt="160px"
                pl="190px"
                bg="linear-gradient(90deg, rgba(4, 0, 50, 0.8), rgba(3,3,3, 0.3))"
            >
                <Text fontWeight="bold" fontSize="32px" mb="30px">
                    쿠팡플레이를 이용하면 좋은 점
                </Text>
                <IconAndTitle
                    icon={RiShieldUserLine}
                    w="40"
                    h="40"
                    title="키즈 모드"
                    description="잠금 기능으로 아이들 안심 시청"
                />
                <IconAndTitle
                    icon={FiBookOpen}
                    w="40"
                    h="40"
                    title="교육 콘텐츠"
                    description="키즈/성인 대상 다양한 교육 콘텐츠"
                />
                <IconAndTitle
                    icon={MdOutlineDevices}
                    w="40"
                    h="40"
                    title="다양한 디바이스"
                    description="모바일, 태블릿, PC, TV로 언제 어디서나"
                />
                <IconAndTitle
                    icon={FiDownload}
                    w="40"
                    h="40"
                    title="오프라인 시청"
                    description="미리 다운로드하여 데이터 걱정 없이(일부 콘텐츠 제외)"
                />
            </VStack>
        </Box>
    );
}
