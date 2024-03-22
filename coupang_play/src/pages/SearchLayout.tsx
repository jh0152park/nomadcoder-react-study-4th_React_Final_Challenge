import { Helmet } from "react-helmet";
import Header from "../components/home/Header";
import { Box, VStack } from "@chakra-ui/react";
import SearchInput from "../components/search/SearchInput";
import { Outlet, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";

export default function SearchLayout() {
    const navigate = useNavigate();
    const { register, reset, handleSubmit } = useForm();

    function onSubmit({ keyword }: FieldValues) {
        navigate(`/search/${keyword}`);
        window.location.replace(`/search/${keyword}`);
        reset();
    }

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 검색</title>
            </Helmet>
            <Header />
            <VStack w="100%" h="100vh" alignItems="center">
                <Box
                    w="700px"
                    h="60px"
                    mt="100px"
                    position="relative"
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <SearchInput
                        register={register("keyword", { required: true })}
                    />
                </Box>
                <Outlet />
            </VStack>
        </>
    );
}
