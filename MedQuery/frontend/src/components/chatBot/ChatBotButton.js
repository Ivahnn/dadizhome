import React from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store';
import classes from './ChatBot.module.css'; // Adjust path as per your file structure

const ChatBotButton = () => {
  const dispatch = useDispatch();

  const toggleChatBotModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <button className={`${classes.button} ${classes.stickyButton}`} onClick={toggleChatBotModal}>
      <img src="/images/chat.png" style={{ width: '101px' }} alt="Chat" />
    </button>
  );
};

export default ChatBotButton;
