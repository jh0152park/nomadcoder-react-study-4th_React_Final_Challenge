import { HStack, Image } from "@chakra-ui/react";
import Information from "../../components/footer/Information";
import Policy from "../../components/footer/Policy";
import SNS from "../../components/footer/SNS";

export default function Footer() {
    return (
        <HStack w="100%" h="250px" px="270px" alignItems="flex-start" pt="20px">
            <Image
                w="220px"
                src="/resources/images/common/logo.webp"
                objectFit="cover"
            />
            <Information />
            <Policy />
            <SNS />
        </HStack>
    );
}
