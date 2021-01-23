import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as ordersAPI from '../../utilities/orders-api';
import * as usersService from '../../utilities/users-service';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistoryPage({ user, setUser }) {

  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState('');
  

  useEffect(function() {
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
      setActiveOrder(orders[0].lineItems);
    }
    getOrders();

    
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orders={orders} activeOrder={activeOrder} setActiveOrder={setActiveOrder} />
      <OrderDetail 
        activeOrder={activeOrder} 
        // orderItems={orderItems.filter(order => order.orderItems.id === activeOrder)}
        />


    </main>
  );
}