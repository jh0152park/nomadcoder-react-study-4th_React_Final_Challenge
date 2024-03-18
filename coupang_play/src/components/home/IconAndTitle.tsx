import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IProps {
    w: string;
    h: string;
    icon: IconType;
    title: string;
    description: string;
}

export default function IconAndTitle({
    w,
    h,
    icon,
    title,
    description,
}: IProps) {
    return (
        <HStack ml="25px" mb="30px">
            <Icon as={icon} w={`${w}px`} h={`${h}px`} />
            <VStack alignItems="flex-start" ml="40px">
                <Text fontWeight="bold" fontSize="25px">
                    {title}
                </Text>
                {description.split("(").map((text, index) => (
                    <Text fontSize="14px" key={text}>
                        {index === 1 ? `(${text}` : text}
                    </Text>
                ))}
            </VStack>
        </HStack>
    );
}
