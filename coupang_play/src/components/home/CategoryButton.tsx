import { Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CURRENT_CATEGORY } from "../../global/projectCommon";
import { goToTop } from "../../utils";

interface IProps {
    category: string;
    url: string;
}

export default function CategoryButton({ category, url }: IProps) {
    const navigate = useNavigate();
    const [currentCategory, setCurrentCategory] =
        useRecoilState(CURRENT_CATEGORY);

    function onCategoryClick() {
        goToTop();
        setCurrentCategory(category);
        navigate(`/home/${url}`);
    }

    return (
        <Center
            px="15px"
            py="10px"
            fontSize="19px"
            fontWeight="bold"
            mt="3px"
            borderBottom={
                currentCategory === category
                    ? "2px solid white"
                    : "2px solid rgba(0,0,0,0)"
            }
            onClick={onCategoryClick}
            _hover={{
                cursor: "pointer",
                borderBottom: "2px solid white",
            }}
        >
            {category}
        </Center>
    );
}
