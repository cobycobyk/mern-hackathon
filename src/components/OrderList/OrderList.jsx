import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({orders}) {
  const orderItems = orders.map(order =>
    <OrderListItem
      key={order._id}
      order={order}
    />
  );
  return (
    <main className="OrderList">
     {orderItems}
    </main>
  );
}