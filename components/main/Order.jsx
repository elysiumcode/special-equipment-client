import styles from '../../styles/order.module.scss'
import DescParse from "./DescParse";


function Order({name, phone, email, desc, time, pay, address}) {

    return (
        <div className={styles.order}>
            <div className={styles.order__name}>{name}</div>
            <div className={styles.order__contacts}>
                <b>Контактная информация:</b>
                <div className={styles.order__email}>Почта: {email}</div>
                <div className={styles.order__phone}>Номер телефона: {phone}</div>
            </div>
            <div className={styles.order__desc}>
                <b>Описание:</b><br/>
                <DescParse desc={desc}/>
            </div>
            <div className={styles.order__address}><b>Адрес:</b> {address}</div>
            <div className={styles.order__pay}><b>Способ оплаты:</b> {pay}</div>
            <div className={styles.order__date}><b>Время публикации:</b> date</div>
        </div>
    )
}

export default Order