import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../../hooks/UseTypedRedux';
import { bookSelectors } from '../../../store/reducers/library';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Book, Shelf } from '../../../components';

interface IProps {
    shelfId: string
    title: string;
    children: JSX.Element[] | JSX.Element;
}

export function ShelfView({shelfId, title, children}: IProps) {

    const books = useSelector(bookSelectors.selectAll);
    //const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    function reorder(title: string) {
        alert(title);
    }

    return (
        <Shelf>
            {books.filter((book) => book.shelfId === shelfId)
                .map((book) => (
                    <Book key={book.id}
                        title={book.name}
                        sub={book.type ? book.type : ""} />
                ))}
        </Shelf>
    );
}