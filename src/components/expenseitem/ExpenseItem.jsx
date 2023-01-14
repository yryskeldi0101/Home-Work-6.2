import React from 'react'
import styles from  "./ExpenseItem.module.css"
const ExpenseItem = ({name, year}) => {
    const old = "years old";
  return (
    <div className={styles.elements}>
            <div className={styles.item}>
            <p className={styles.name}>{name}</p>
            <p className={styles.year}> {`( ${year}  ${old} )`}</p>
            </div>
        </div>
  )
}

export default ExpenseItem