import classes from './Chatbot.module.css';

const ChatBotCard = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default ChatBotCard;
