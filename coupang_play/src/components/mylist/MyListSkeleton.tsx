import { VStack } from "@chakra-ui/react";
import OneLineSkeleton from "../home/skeleton/OneLineSkeleton";
import Header from "../home/Header";
import Footer from "../../pages/common/Footer";

export default function MyListSkeleton() {
    return (
        <>
            <Header />
            <VStack w="100%" h="750px" pt="150px">
                <OneLineSkeleton />
                <OneLineSkeleton />
            </VStack>
            <Footer />
        </>
    );
}
