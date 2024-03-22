import { Box, Icon, Input, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Header from "../components/home/Header";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import SearchInput from "../components/search/SearchInput";
import ContentGrid from "../components/search/ContentGrid";
import GenreGrid from "../components/search/GenreGrid";

export default function Search() {
    const [searching, setSearching] = useState(false);
    const { register, reset, handleSubmit } = useForm();

    function onSubmit({ keyword }: FieldValues) {
        console.log(keyword);
    }

    return (
        <>
            <Helmet>
                <title>쿠팡플레이 - 검색</title>
            </Helmet>
            <VStack w="100%" h="100vh" alignItems="center">
                <Header />
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
                <ContentGrid />
                <GenreGrid />
            </VStack>
        </>
    );
}
