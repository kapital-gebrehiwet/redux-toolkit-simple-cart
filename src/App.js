import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { cartTotal } from './features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from'react-redux';
import Modal from './components/modal';
function App() {
  const{ cartItems}=useSelector((state)=>state.cart);
  const{isOpen}=useSelector((state)=>state.modal)
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(cartTotal())}
,[cartItems])
  return (
    <>
    <main>
      {isOpen && <Modal/>}
      <Navbar />
      <CartContainer/>
    </main>


    </>
  );
}
export default App;
