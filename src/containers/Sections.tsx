import { Box, VStack } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { FlipShelf } from './FlipShelf';

interface IProps {
    items: string[];
    currentId: number;
    children: JSX.Element[] | JSX.Element;
}

export function Sections({ items, currentId, children }: IProps) {

    const activeSlideRef = useRef<HTMLDivElement>(null);
    const h: number = 600
    const hSection: string = h + "px"
    const hStack: string = items.length * h + "px"

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
        <Box w="100%" h={hSection} overflow='hidden' border='1px' borderColor='blue'>
            <VStack h={hStack}>
                {items.map((item, i) => (
                    <Box key={i} ref={i === currentId ? activeSlideRef : null}
                        w='100%' h={hSection}>
                        {item}
                        {children}
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

