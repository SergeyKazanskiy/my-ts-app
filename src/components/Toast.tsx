import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { RootState } from '../store/store';
import { toastActions } from '../store/reducers/ToastReducer';

function ToastComponent() {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, message } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (isOpen) {
      toast({
        title: message,
        status: 'success', 
        duration: 2000, 
        isClosable: true,
        onCloseComplete: () => dispatch(toastActions.closeToast()), // Close toast action
      });
    }
  }, [dispatch, isOpen, message, toast]);

  return null; // The toast is rendered by Chakra UI toast component
}

export default ToastComponent;


//in other component dispatch(openToast('This is a toast message.'));
