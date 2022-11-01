import React from 'react'
import { Browsercard } from './rightsearch.style'
import { Head3 } from '../home/right.style'

const CardBrowser = (props) => {
  return (
    <Browsercard color = {props.color}>
        <Head3>{props.name}</Head3>
        <img src={props.img} alt="img" />
    </Browsercard>
  )
}

export default CardBrowser