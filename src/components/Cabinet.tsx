import { Box, Heading, Button } from "@chakra-ui/react";
import { Shelf } from '../components/Shelf';



interface IProps {
    counter: number;
    title: string;
    children: JSX.Element[] | JSX.Element;
}

export const Cabinet = ({ title, counter, children }: IProps) => {

    const shelves = () => {
        let arr = [];
        for (let i = 1; i <= counter; i++) {
            arr.push(<Shelf key={i}>{children}</Shelf>);
        }
        return arr;
    };

    return (
        <Box w="270px" h="450px"
            border='1px' borderColor='gray.700' bgImage="url(/Panel.png)" bgSize='100%'>
            <Box h='25px' bgImage="url(/greenTree.jpg)" bgSize='100%' mx={3} my={2}>
                <Heading size={'sm'} p={1} color='red.200'>
                    {title}
                </Heading>
            </Box>
            {shelves()}
        </Box>
    );
};