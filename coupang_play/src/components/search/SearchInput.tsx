import { Box, Icon, Input } from "@chakra-ui/react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface IProps {
    register: UseFormRegisterReturn;
}

export default function SearchInput({ register }: IProps) {
    return (
        <>
            <Input
                w="100%"
                h="100%"
                borderRadius="30px"
                border="1px solid rgba(255, 255, 255, 0.4)"
                focusBorderColor="rgba(255, 255, 255, 0.4)"
                _hover={{
                    borer: "none",
                }}
                pt="5px"
                pl="30px"
                color="rgba(255, 255, 255, 0.4)"
                fontSize="25px"
                placeholder="제목, 장르, 배우로 검색해보세요"
                _placeholder={{
                    color: "rgba(255, 255, 255, 0.3)",
                }}
                {...register}
            />
            <Box
                as="button"
                type="submit"
                position="absolute"
                right="30px"
                top="0"
                bottom="0"
                my="auto"
                pt="3px"
                zIndex="99"
            >
                <Icon
                    w="25px"
                    h="25px"
                    as={FaMagnifyingGlass}
                    _hover={{
                        cursor: "pointer",
                    }}
                />
            </Box>
        </>
    );
}
