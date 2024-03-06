import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function ActionCreators() {
  return {
    type: "ADD_TODO",
    text: "text",
  };
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
