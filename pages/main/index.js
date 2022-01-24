import React, { useState } from 'react'
import Logo from '../../assets/images/main-logo.png'
import Logout from '../../assets/images/main-logout.png'
import Change from '../../assets/images/main-change.png'
import Link from 'next/link'
import styles from '../../styles/index.module.scss';



function Main({ children }) {

  const nav = {
    search: 'Поиск заявок',
    create: 'Создать новую заявку',
    cabinet: 'Личный кабинет',
    trans: 'Мои транзакции',
    apps: 'Мои заявки'
  }

  const [activeRole, setActiveRole] = useState(0)
  const [activeNav, setActiveNav] = useState('cabinet')

  return (
    <div className="main-page">
      <div className="main__header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="profile">
          <span>Роль:</span>
          <span
            className={`role ${activeRole === 0 ? 'active' : ''}`}
            onClick={() => setActiveRole(0)}
          >Заказчик</span>
          <img src={Change} alt="change" />
          <span
            className={`role ${activeRole === 1 ? 'active' : ''}`}
            onClick={() => setActiveRole(1)}
          >Исполнитель</span>
        </div>
        <div className="logout">
          <div className="logout__img-container">
            <img src={Logout} alt="logout" />
          </div>
        </div>
      </div>
      <div className="main__container">
        <div className="main__nav">
          <div className="main__nav__links">
            {Object.keys(nav).map(key => (
              <Link href={`/main/${key}`}>
                <div
                  key={key}
                  className={`link ${key === activeNav ? 'active' : ''}`}
                  onClick={() => setActiveNav(key)}
                >
                  <span>{nav[key]}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="main__content">
        </div>
      </div>
    </div>
  )
}

export default Main
