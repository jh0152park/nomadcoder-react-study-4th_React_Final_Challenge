import { Box, HStack, Image } from "@chakra-ui/react";

export default function SNS() {
    const sns = ["yt", "fb", "ig", "tw"];
    const links: { [key: string]: string } = {
        yt: "https://www.youtube.com/channel/UCjn-VbcIkAeXQKCmLJV8YwQ",
        fb: "https://www.facebook.com/CoupangPlay/",
        ig: "https://www.instagram.com/coupangplay/",
        tw: "https://twitter.com/coupangplay",
    };

    return (
        <HStack ml="125px" spacing="10px">
            {sns.map((_sns) => (
                <Box
                    w="40px"
                    _hover={{ cursor: "pointer" }}
                    key={_sns}
                    as="a"
                    target="_blank"
                    href={links[`${_sns}`]}
                >
                    <Image
                        w="100%"
                        src={`resources/images/footer/social-${_sns}.png`}
                    />
                </Box>
            ))}
        </HStack>
    );
}
