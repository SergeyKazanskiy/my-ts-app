import { MachineType } from '../../../../hooks/UseStateMachine'


export const BOOK_COPY_MACHINE: MachineType = {
  Books_Unselected: {
    BOOK_SELECT: "MenuReady_Copy", // BUTTON visible, MENU set actions for books
  },
  MenuReady_Copy: {
    THE_SAME_BOOK_CLICKED: "Books_Unselected", // BUTTON not visible
    BUTTON_MENU_CLICKED: "MenuOpened_Copy", // MENU opened
  },
  MenuOpened_Copy: {
    BUTTON_MENU_CLICKED: "MenuReady_Copy", // MENU closed
    COPY_BUTTON_CLICKED: "StartCopyProcess", // MENU closed, TOAST: "Select shelf for paste book"
  },

  Shelf_Unselected: { // TOAST: "Open menu for paste book"
    SHELF_SELECT: "Shelf_Selected",
  },

  Shelf_Selected: { // TOAST: "Open menu for paste book"
    THE_SAME_SHELF_SELECT: "Shelf_Unselected",
    Goto: "MenuReady_Paste",
  },




  
  MenuReady_Paste: {
    OTHER_BOOK_CLICKED: "MenuReady_Paste", // hide [:], all components unblocked
    BUTTON_MENU_CLICKED: "MenuOpened_Paste",
  },
  MenuOpened_Paste: {
    CANCEL_BUTTON_CLICKED: "Canceled", // hide [:], all components unblocked
    PASTE_BUTTON_CLICKED: "Finished",
  },
  Canceled: {
    BUTTON_MENU_CLICKED: "Start"
  },
  Finished: {
    BUTTON_MENU_CLICKED: "Start"
  }
}
