import { motion } from "framer-motion";
import { styled } from "styled-components";

export const MainImageBox = styled(motion.div)<{ bgphoto?: string }>`
    background-image: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
        ),
        url(${(p) => p.bgphoto});
    background-size: cover;
    background-position: top center;
    /* object-fit: cover; */
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
        cursor: default;
    }
`;

export const MainBannerImageVariants = {
    start: (direction: number) => ({
        x: window.outerWidth * direction + 5,
    }),
    end: {
        x: 0,
    },
    exit: (direction: number) => ({
        x: -window.outerWidth * direction - 5,
    }),
};

export const PlayButton = styled(motion.div)`
    width: 300px;
    height: 65px;
    border-radius: 5px;
    background-color: rgb(18, 148, 244);
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: rgb(11, 88, 163);
        transition: all 0.1s linear;
    }
`;

export const Overlay = styled(motion.div)`
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const BannerDetail = styled(motion.div)`
    width: 700px;
    height: 600px;
    background-color: #171717;
    border-radius: 10px;
    position: absolute;
    box-sizing: border-box;
`;
