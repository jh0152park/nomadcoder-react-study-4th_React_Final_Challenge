import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Frames = styled(motion.div)`
    width: 95%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;

    div:first-child {
        transform-origin: center left;
    }
    div:last-child {
        transform-origin: center right;
    }
`;
