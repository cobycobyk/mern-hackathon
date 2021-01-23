import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, activeOrder, setActiveOrder }) {
  const orderItems = orders.map(order =>
    <OrderListItem
      key={order._id}
      order={order}
      className={order === activeOrder ? 'active' : ''}
        // FYI, the below will also work, but will give a warning
        // className={cat === activeCat && 'active'}
        onClick={ console.log(activeOrder)}
        // onClick={() => setActiveOrder(order)}
    />
  );
  return (
    <main className="OrderList">
     {orderItems}
    </main>
  );
}
