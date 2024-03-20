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
