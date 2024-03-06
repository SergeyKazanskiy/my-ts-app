import { useStateMachine } from '../../../../hooks/UseStateMachine'
import { BOOK_COPY_MACHINE } from '../../machines/book/CopyMachine';
import { bookActions } from '../../../../store/reducers/library/BookReducer';
import { menuActions } from '../../../../store/reducers/MenuReducer';
import { toastActions } from '../../../../store/reducers/ToastReducer';

// event = all component events, using index
// copy state = reducer with standart process states
// save current state for current process book-copy
// menuActions, toastActions через index usedispatch

export function BookCoping(event: string, id?: number) {
    return (dispatch: Function, getState: Function) => {
      const [state, send] = useStateMachine("Start", BOOK_COPY_MACHINE)
      //const setState = processActions.copy

      send(event)
      switch (state) { // state/copy_states
        case 'Books_Unselected':
          if (event === "BOOK_SELECT") {
            dispatch(bookActions.setCurrent("id"))
            dispatch(menuActions.setBookCommands)
            //dispatch(setState.state1)
          }
          break;
        case 'MenuReady_Copy':
          if (event === "BOOK_SELECT") {
            dispatch(bookActions.setCurrent(""))
          };
          if (event === "BUTTON_MENU_CLICKED") {
            dispatch(menuActions.openMenu)
          }
          break;
        case 'MenuOpened_Copy':
          if (event === "MENU_COPY_CLICKED") {
            dispatch(menuActions.closeMenu)
            dispatch(toastActions.openToast("Select shelf for paste book"))
          }
          if (event === "BUTTON_MENU_CLICKED") {
            dispatch(menuActions.closeMenu) // MenuReady_Copy
          }
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