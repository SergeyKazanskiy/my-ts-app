import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../../hooks/UseTypedRedux';
import { cabinetSelectors, shelfSelectors, bookSelectors } from '../../../store/reducers/library';
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { Book, Cabinet, Shelf } from '../../../components';
import { FlipShelf } from '../../../containers';


export function Section(sectionId: string, title: string) {

    //data
    const cabinets = useSelector(cabinetSelectors.selectAll);
    const shelves = useSelector(shelfSelectors.selectAll);
    const books = useSelector(bookSelectors.selectAll);

    //states
    //const count = useAppSelector((state) => state.counter.value)

    //actions
    const dispatch = useAppDispatch()

    function reorderBooks(title: string) {
        alert(title);
    }

    function booksView(shelfId: string) {
        return (
            <HStack>
                {books.filter((book) => book.shelfId === shelfId)
                    .map((book) => (
                        <Book key={book.id}
                            title={book.name}
                            sub={book.type ? book.type : ""} />
                    ))}
            </HStack>
        );
    }

    function shelvesView(cabinetId: string) {
        return (
            <VStack>
                {shelves.filter((shelf) => shelf.cabinetId === cabinetId)
                    .map((shelf) => (
                        <Shelf key={shelf.id}>
                            {booksView(shelf.id)}
                        </Shelf>
                    ))}
            </VStack>
        );
    }

    return (
        <VStack>
            <Box h='25px' bgImage="url(/Panel.png)" bgSize='100%' mx={3} my={2}>
                <Heading size={'sm'} p={1} color='red.200'>
                    {title}
                </Heading>
            </Box>
            <HStack spacing={0} px={4}>
                {cabinets.filter((item) => item.sectionId === sectionId)
                    .map((cabinet) => (
                        <Cabinet title={cabinet.name} counter={3}>
                            {shelvesView(cabinet.id)}
                        </Cabinet>
                    ))}
            </HStack>
            <FlipShelf title='Нераспределенные книги'>
                {books.filter((book) => book.shelfId === "")
                    .map((book) => (
                        <Book key={book.id}
                            title={book.name}
                            sub={book.type ? book.type : ""} />
                    ))}
            </FlipShelf>
        </VStack>
    );
}