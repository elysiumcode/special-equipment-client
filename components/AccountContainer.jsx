import React, { useState } from 'react'
import Logo from '../assets/images/main-logo.png'
import Logout from '../assets/images/main-logout.png'
import Change from '../assets/images/main-change.png'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/main.module.scss';
import {useRouter} from 'next/router';


function Main({ children }) {

  const nav = {
    search: 'Поиск заявок',
    create: 'Создать новую заявку',
    cabinet: 'Личный кабинет',
    trans: 'Мои транзакции',
    apps: 'Мои заявки'
  }

  const router = useRouter();
  const query = router.pathname.split('/')[2];
  console.log(query)
  const [activeRole, setActiveRole] = useState(0)
  const [activeNav, setActiveNav] = useState(query);


  return (
    <div className={styles.mainPage}>
      <div className={styles.main__header}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.profile}>
          <span>Роль:</span>
          <span
            className={`role ${activeRole === 0 ? 'active' : ''}`}
            onClick={() => setActiveRole(0)}
          >Заказчик</span>
          <Image src={Change} alt="change" />
          <span
            className={`role ${activeRole === 1 ? 'active' : ''}`}
            onClick={() => setActiveRole(1)}
          >Исполнитель</span>
        </div>
        <div className={styles.logout}>
          <div className={styles.logout__ImageContainer}>
            <Image src={Logout} alt="logout" />
          </div>
        </div>
      </div>
      <div className={styles.main__container}>
        <div className={styles.main__nav}>
          <div className={styles.main__nav__links}>
            {Object.keys(nav).map(key => (
              <Link href={`/main/${key}`}>
                <div
                  key={key}
                  className={`${styles.link} ${key === activeNav ? styles.active : ''}`}
                  onClick={() => setActiveNav(key)}
                >
                  <span>{nav[key]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.main__content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Main
