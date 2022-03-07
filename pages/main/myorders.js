import React, {useEffect} from 'react'
import Title from '../../components/main/Title/Title'
import styles from '../../styles/Create.module.scss';
import DocContainer from '../../components/DocContainer'
import AccountContainer from '../../components/AccountContainer'
import OrdersContainer from '../../components/main/OrdersContainer'
import {useDispatch, useSelector} from "react-redux";
import {getUserOrdersThunk} from "../../store/reducers/ordersReducer";

function MyOrders() {

    const dispatch = useDispatch()
    const userOrders = useSelector(state => state.orders.userOrders)

    useEffect(() => {
        dispatch(getUserOrdersThunk())
    }, [])

    return (
        <DocContainer>
            <AccountContainer>
                <div className={styles.cabinet__container}>
                    <div className={styles.title__wrapper}>
                        <Title>Мои заявки</Title>
                    </div>
                    <OrdersContainer orders={userOrders}/>
                </div>
            </AccountContainer>
        </DocContainer>
    )
}

export default MyOrders
