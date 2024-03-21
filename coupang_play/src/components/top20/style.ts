import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Frames = styled(motion.div)`
    width: 95%;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px;
    margin-top: 10px;
    box-sizing: border-box;
    /* overflow: hidden; */
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;

    /* div: {
        transform-origin: top right;
    } */

    /* border: 1px solid blueviolet; */
`;
