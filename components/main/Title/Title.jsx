import React from 'react'
import styles from '../../../styles/Title.module.scss';

function Title({children}) {
  return (
    <div className={styles.chapterTitle}>
      {children}
    </div>
  )
}

export default Title
