import { useDispatch, useSelector } from 'react-redux';
import classes from './ChatBot.module.css';
import Modal from './Modal';
import { modalActions } from '../../store';

const ChatBotCart = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.modalIsOpen);

  const closeModal = () => {
    dispatch(modalActions.toggleModal());
  };

  console.log('ChatBotCart render:', showModal);

  return (
    <Modal
      className={classes.cart}
      open={showModal}
      onClose={closeModal}
    >
      <h2>Your Cart</h2>
    </Modal>
  );
};

export default ChatBotCart;
