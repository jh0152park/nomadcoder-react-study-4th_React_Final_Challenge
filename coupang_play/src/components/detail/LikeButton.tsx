import { useRecoilState } from "recoil";
import { FAVORITE_MOVIES, FAVORITE_TVS } from "../../global/projectCommon";
import { Center, Icon, Text, VStack } from "@chakra-ui/react";
import { GoPlus, GoCheck } from "react-icons/go";

interface IProps {
    id: number;
    category: "movie" | "tv";
}

export default function LikeButton({ id, category }: IProps) {
    const [movieList, setMovieList] = useRecoilState(FAVORITE_MOVIES);
    const [tvList, setTVList] = useRecoilState(FAVORITE_TVS);
    const likeList = category === "movie" ? movieList : tvList;
    const isLiked = likeList.includes(id);

    function onLikeClick() {
        if (category === "movie") {
            if (isLiked) {
                // to be deleted
                const list = movieList.filter((m: number) => m !== id);
                setMovieList(list);
            } else {
                // to be added
                setMovieList((prev: number[]) => [...prev, id]);
            }
        } else {
            // TV
            if (isLiked) {
                // to be deleted
                const list = tvList.filter((m: number) => m !== id);
                setTVList(list);
            } else {
                // to be added
                setTVList((prev: number[]) => [...prev, id]);
            }
        }
    }

    return (
        <VStack
            ml="25px"
            alignItems="center"
            _hover={{
                cursor: "pointer",
            }}
            onClick={onLikeClick}
        >
            <Center
                w="30px"
                h="30px"
                border="1px solid white"
                borderRadius="50%"
            >
                <Icon
                    as={isLiked ? GoCheck : GoPlus}
                    w="20px"
                    h="20px"
                    color="white"
                />
            </Center>
            <Text fontSize="12px">찜한 콘텐츠</Text>
        </VStack>
    );
}
