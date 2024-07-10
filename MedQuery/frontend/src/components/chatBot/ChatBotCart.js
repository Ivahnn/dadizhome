import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import ChatBotCard from "./ChatBotCard";

const Cart = (props) => {
  const showModal = useSelector((state) => state.modal.isOpen);

  return (
    <ChatBotCard className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      
    </ChatBotCard>
  );
};

export default Cart;
