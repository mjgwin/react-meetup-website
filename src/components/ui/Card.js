import React from 'react'
import CardStyle from './Card.module.css'

const Card = (props) => {
  return (
    <div className={CardStyle.card}>{props.children}</div>
  )
}

export default Card