import React from 'react'
import Title from '../../components/main/Title/Title'
import styles from '../../styles/Create.module.scss';
import MainForm from '../../components/MainForm'
import DocContainer from '../../components/DocContainer'
import AccountContainer from '../../components/AccountContainer'

function Create() {
  return (
    <DocContainer>
      <AccountContainer>
        <div className={styles.cabinet__container}>
          <div className={styles.title__wrapper}>
            <Title>Общая информация</Title>
          </div>
          <div className={styles.form__wrapper}>
            <MainForm variant="standard" />
          </div>
        </div>
      </AccountContainer>
    </DocContainer>
  )
}

export default Create
