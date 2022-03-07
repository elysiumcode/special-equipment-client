import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/main-logo.png'
import Logout from '../assets/images/main-logout.png'
import Change from '../assets/images/main-change.png'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/main.module.scss';
import {useRouter} from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import {authThunk} from '../store/reducers/userReducer'
import {logout} from '../store/reducers/userReducer'


function Main({ children }) {

  const nav = {
    search: 'Поиск заявок',
    create: 'Создать новую заявку',
    cabinet: 'Личный кабинет',
    myorders: 'Мои заявки'
  }

  const auth = useSelector(state => state.user.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const [activeRole, setActiveRole] = useState(0)
  const [activeNav, setActiveNav] = useState(router.pathname.split('/')[2] || 'cabinet')

  useEffect(() => {
    dispatch(authThunk())
    console.log(router)
    if(!auth) {
      router.push('/')
    }
  }, [])


  const logoutHandler = () => {
    dispatch(logout())
    router.push('/')
  }


  return (
    <div className={styles["main-page"]}>
      <div className={styles["main__header"]}>
        <div className={styles["logo"]}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles["profile"]}>
          <span>Роль:</span>
          <span
            className={activeRole === 0 ? styles["role--active"] : styles["role"]}
            onClick={() => setActiveRole(0)}
          >Заказчик</span>
          <Image src={Change} alt="change" />
          <span
            className={activeRole === 1 ? styles["role--active"] : styles["role"]}
            onClick={() => setActiveRole(1)}
          >Исполнитель</span>
        </div>
        <div className={styles["logout"]}>
          <div className={styles["logout__img-container"]}>
            <Image src={Logout} alt="logout" onClick={logoutHandler}/>
          </div>
        </div>
      </div>
      <div className={styles["main__container"]}>
        <div className={styles["main__nav"]}>
          <div className={styles["main__nav__links"]}>
            {Object.keys(nav).map(key => (
              <Link href={`/main/${key}`} key={key}>
                <div
                  className={key === activeNav ? styles["link--active"] : styles["link"]}
                  onClick={() => setActiveNav(key)}
                >
                  <span>{nav[key]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles["main__content"]}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Main
