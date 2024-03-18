import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
    VStack,
} from "@chakra-ui/react";

export default function QnA() {
    return (
        <VStack
            w="100%"
            minH="500px"
            py="20px"
            bg="linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.6))"
            justifyContent="center"
            alignItems="center"
        >
            <Text fontWeight="bold" fontSize="33px" mb="15px">
                자주 묻는 질문
            </Text>
            <Box
                w="800px"
                border="1px solid rgba(255, 255, 255, 0.5)"
                borderRadius="5px"
            >
                <Accordion allowToggle w="100%">
                    <AccordionItem
                        py="10px"
                        borderBottom="1px solid rgba(255, 255, 255, 0.5)"
                    >
                        <AccordionButton>
                            <Text
                                flex="1"
                                textAlign="left"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                Q. 쿠팡플레이가 무엇인가요?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4} fontSize="18px" px="15px">
                            쿠팡플레이는 쿠팡 로켓와우 멤버십 회원에게 제공되는
                            무료 콘텐츠 스트리밍 서비스입니다. (일부 유료 콘텐츠
                            제외)
                            <br />
                            <br />
                            주기적으로 업데이트 되는 국내 예능부터 영화,
                            애니메이션, 다큐멘터리, 쿠팡플레이 시리즈까지
                            다채로운 콘텐츠를 광고 없이 시청하실 수 있습니다.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem
                        py="10px"
                        borderBottom="1px solid rgba(255, 255, 255, 0.5)"
                    >
                        <AccordionButton>
                            <Text
                                flex="1"
                                textAlign="left"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                Q. 쿠팡플레이는 누가 이용할 수 있나요?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize="18px" px="15px">
                            쿠팡 로켓와우 멤버십 회원이라면 누구나 무료
                            로켓배송, 무료 반품, 특가 상품 등의 혜택과 더불어
                            무료로 이용할 수 있습니다. (일부 유료 콘텐츠 제외)
                            <br />
                            <br />
                            단, 쿠팡플레이는 로켓와우 개인 멤버십 회원에 한해
                            제공되고 있으며 쿠팡 비즈 회원 계정으로 가입한
                            회원은 이용이 제한됨을 참고 부탁드립니다.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        py="10px"
                        borderBottom="1px solid rgba(255, 255, 255, 0.5)"
                    >
                        <AccordionButton>
                            <Text
                                flex="1"
                                textAlign="left"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                Q. 쿠팡플레이에 어떻게 가입하나요?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize="18px" px="15px">
                            쿠팡플레이는 쿠팡 로켓와우 멤버십 회원에게 제공되는
                            콘텐츠 스트리밍 서비스입니다. 아래의 경로로 로켓와우
                            멤버십에 가입하시거나 30일 무료 체험을 등록한 후
                            무료 로켓배송, 무료 반품, 특가 상품 등의 혜택과 함께
                            쿠팡플레이를 무료로 이용해보세요. (일부 유료 콘텐츠
                            제외)
                            <br />
                            <br />
                            단, 쿠팡플레이는 로켓와우 개인 멤버십 회원에 한해
                            제공되고 있으며 쿠팡 비즈 회원 계정으로 가입한
                            회원은 이용이 제한됨을 참고 부탁드립니다.
                            <br />
                            <br />
                            <span>{`• 안드로이드 : 쿠팡플레이 앱 접속 > 실행 후 [와우 멤버십 시작하기] 선택 > 쿠팡 앱 연결 및 로켓와우 멤버십 가입`}</span>
                            <br />
                            <br />
                            <span>{`• iOS : 쿠팡플레이 앱 접속 > 실행 후 [coupangplay.com/join] 선택> 외부 웹사이트 이동 안내 페이지 내 [계속] 선택 > [지금 와우 멤버십 가입하기] 선택 > 쿠팡플레이 로그인 페이지 내 [쿠팡 회원가입하기] 선택 > 로켓와우 멤버십 가입`}</span>
                            <br />
                            <br />
                            <span>{`• PC : www.coupangplay.com 접속 후 [와우 멤버십 가입하기] 선택 > 쿠팡 로그인 팝업 내 [쿠팡 회원가입하기] 버튼 클릭 > 로켓와우 멤버십 가입`}</span>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem py="10px">
                        <AccordionButton>
                            <Text
                                flex="1"
                                textAlign="left"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                Q. 쿠팡플레이는 어떤 기기에서 시청할 수 있나요?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} fontSize="18px" px="15px">
                            쿠팡플레이는 Android와 iOS 기반의 모든 모바일/태블릿
                            기기와 더불어 PC, 삼성 스마트 TV, LG 스마트 TV 및
                            안드로이드 TV에서도 시청이 가능합니다.
                            <br />
                            <br />
                            계정 당 최대 5대의 기기를 등록할 수 있으며, 최대
                            2대의 기기에서 동시 시청이 가능합니다.
                            <br />
                            <br />
                            • 모바일/태블릿 기기: Android 와 iOS 기반의 모든
                            모바일 기기 (권장 버전 : Android OS 6 버전 이상, iOS
                            13 버전 이상)
                            <br />
                            <br />
                            • PC : www.coupangplay.com (지원 브라우저: Edge,
                            Chrome, Safari, Whale)
                            <br />
                            <br />
                            • 스마트 TV
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;• 삼성 스마트TV: Tizen 3.0
                            (제조년월 2017년도 이후 모델)버전 이상
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;• LG 스마트TV: 웹 OS 3.5 (2017년
                            모델) ~ 6.0 (2021년 모델)
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;• 안드로이드 TV: Android 6.0 버전
                            이상
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </VStack>
    );
}
