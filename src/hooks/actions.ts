import {useDispatch} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { viewtimeActions } from "../store/courses/viewtime.slice";

const actions = {
  ...viewtimeActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}