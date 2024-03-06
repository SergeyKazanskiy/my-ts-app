import { Box, VStack } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

interface IProps {
    items: string[];
    currentId: number;
    children: JSX.Element[] | JSX.Element;
}

export function Sections({ items, currentId, children }: IProps) {

    const activeSlideRef = useRef<HTMLDivElement>(null);
    const h: string = items.length * 500 + "px"

    useEffect(() => {
        if (activeSlideRef.current) {
            activeSlideRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        }
    }, [items, currentId]);

    return (
        <Box w="100%" h='500px' overflow='hidden' border='1px' borderColor='blue'>
            <VStack h={h}>
                {items.map((item, i) => (
                    <Box key={i} ref={i === currentId ? activeSlideRef : null}
                        w='100%' h='500px'>
                        {item}
                        {children}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

