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
      className={classes.modal}
      open={showModal}
      onClose={closeModal}
    >
      <iframe 
        src="http://localhost:8501" // Adjust the URL based on where your Streamlit app is running
        width="100%"
        height="600px"
        style={{ border: 'none', borderRadius:"50px"}}
        title="Streamlit App"

      ></iframe>
    </Modal>
  );
};

export default ChatBotCart;
