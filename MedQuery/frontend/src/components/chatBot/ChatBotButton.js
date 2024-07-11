import { useDispatch } from "react-redux";
import { modalActions } from "../../store";
import classes from "./ChatBot.module.css";

const ChatBotButton = (props) => {
  const dispatch = useDispatch();
  const toggleChatBotModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <button className={`${classes.button} ${classes.stickyButton}`} onClick={toggleChatBotModal}>
      <span>Chat</span>
    </button>
  );
};

export default ChatBotButton;