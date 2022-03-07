import { useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import styles from '../styles/index.module.scss';
import authLogo from '../assets/images/auth-logo.png'
import authArrow from '../assets/images/auth-arrow.png'
import AuthModal from '../components/auth/AuthModal/AuthModal'
import MainForm from '../components/MainForm'
import MainContainer from '../components/DocContainer'
import {authThunk} from '../store/reducers/userReducer'
import { useDispatch } from 'react-redux'


export default function Home() {
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const dispatch = useDispatch()
  const auth = useSelector(state => state.user.auth)
  const router = useRouter()
  
  useEffect(() => {
    dispatch(authThunk())
    console.log('useEffect')
    if(auth) {
      router.push('/main/cabinet')
    }
  })

  return (
    <MainContainer>
      <div className={styles.authContainer}>
        <div className={styles.header}>
          <div className={styles.leftContainer}>
            <Image src={authLogo} alt="logo" />
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.authModal}>
              <div className={styles.authModal__text} onClick={() => setIsVisibleModal(true)}>
                Вход / Регистрация
              </div>
              <div className={styles.authModal__img}>
                <Image src={authArrow} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.titleContainer}>
            <h2 className={styles.titleText}>Оставить заявку</h2>
          </div>
          <div className={styles.mainForm}>
            <MainForm variant="filled" />
          </div>
        </div>
        {isVisibleModal
          ? <AuthModal setIsVisibleModal={setIsVisibleModal} isVisibleModal={isVisibleModal} />
          : ''}
      </div>
    </MainContainer>
  )
}
