import Order from './Order'

function OrdersContainer({orders}) {

    return (
        <div className="orders__container">
            {orders.map(order => (
                <Order
                    key={order.name}
                    name={order.name}
                    phone={order.phone}
                    email={order.email}
                    address={order.address}
                    desc={order.description}
                    pay={order.pay}
                    time={order.time}
                />
            ))}
        </div>
    )
}

export default OrdersContainer