import { Button } from "@chakra-ui/react";

type TButton = "button" | "submit";

interface IProps {
    bg: string;
    color: string;
    hoverBg: string;
    hoverColor: string;
    title: string;
    border: string;
    type?: TButton;
    loading?: boolean;
    onClickFunc?: () => void;
}

export default function ModalButton({
    bg,
    color,
    hoverBg,
    hoverColor,
    title,
    border,
    loading = false,
    type = "button",
    onClickFunc,
}: IProps) {
    return (
        <Button
            w="100%"
            pt="3px"
            bg={bg}
            color={color}
            border={border}
            fontWeight="bold"
            _hover={{
                bg: hoverBg,
                color: hoverColor,
            }}
            transition="all 0.2s linear"
            onClick={onClickFunc}
            type={type}
            isLoading={loading}
        >
            {title}
        </Button>
    );
}
