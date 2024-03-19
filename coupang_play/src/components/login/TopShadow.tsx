import { Box } from "@chakra-ui/react";

export default function TopShadow() {
    return (
        <Box
            w="100%"
            h="110px"
            position="fixed"
            bg="linear-gradient(to bottom, rgba(0, 0, 0, 1.1), rgba(0, 0, 0, 0.05))"
            top={0}
            zIndex={99}
        />
    );
}
