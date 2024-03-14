import { useStateMachine } from '../../../../hooks/UseStateMachine'
import { BOOK_COPY_MACHINE } from '../../machines/book/CopyMachine';
import { bookActions } from '../../../../store/reducers/library/BookReducer';


export function BookCoping(event: string, id?: number) {
    return (dispatch: Function, getState: Function) => {
      const [state, send] = useStateMachine("Start", BOOK_COPY_MACHINE)
  
      send(event)
      switch (state) {
        case 'MenuReady_Copy':
          dispatch(bookActions.removeItem);
          break;
        case 'MenuOpened_Copy':
          dispatch(bookActions.removeItem);
          break;
        case 'PlacesReady':
          dispatch(bookActions.removeItem);
          break;
        case 'MenuReady_Paste':
          dispatch(bookActions.removeItem);
          break;
        case 'MenuOpened_Paste':
          dispatch(bookActions.removeItem);
          break;
        case 'Canceled':
          dispatch(bookActions.removeItem);
          break;
        case 'Finished':
          dispatch(bookActions.removeItem);
          break;
        default:
          dispatch(bookActions.removeItem);
      }
    };
  }