// import React from 'react'
import styles from './Card.module.css'
function Card(props) {
  return (
    <>
       <div className={styles.card}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.content}</p>
       </div>
    </>
  )
}

export default Card