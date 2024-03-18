import { Text, VStack } from "@chakra-ui/react";
import LinkButton from "./LinkButton";

export default function Policy() {
    return (
        <VStack
            alignItems="flex-start"
            fontSize="13px"
            spacing="10px"
            ml="135px"
        >
            <Text>고객센터: 1600-9800</Text>
            <Text>대표 메일: playrepresent@coupang.com</Text>
            <Text>제휴 문의: playbusiness@coupang.com</Text>
            <Text>스팅 서비스 사업자: AWS 코리아</Text>
            <LinkButton
                title="서비스 이용약관"
                href="https://www.coupangplay.com/tac"
            />
            <LinkButton title="FAQ" href="https://www.coupangplay.com/faq" />
            <LinkButton
                title="개인정보 처리방침"
                href="https://www.coupangplay.com/privacy-policy"
            />
        </VStack>
    );
}
