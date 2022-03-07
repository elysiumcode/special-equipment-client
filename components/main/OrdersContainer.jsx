import Order from './Order'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserOrdersThunk} from "../../store/reducers/ordersReducer";



function OrdersContainer({orders}) {

    return (
        <div className="orders__container">
            {orders.map(order => (
                <Order
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