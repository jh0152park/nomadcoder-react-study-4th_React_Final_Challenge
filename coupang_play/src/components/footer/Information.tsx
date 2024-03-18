import { Text, VStack } from "@chakra-ui/react";
import LinkButton from "./LinkButton";

export default function Information() {
    return (
        <VStack
            alignItems="flex-start"
            fontSize="13px"
            spacing="10px"
            ml="135px"
        >
            <Text>쿠팡(주) | 대표이사: 박대준, 강한승</Text>
            <Text>서울시 송파구 송파대로 570</Text>
            <Text>사업자 등록번호: 120-88-00767</Text>
            <Text>통신판매업신고: 2017-서울송파-0680</Text>
            <LinkButton
                title="사업자 정보"
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208800767&amp;apv_perm_no="
            />
        </VStack>
    );
}
