import React from 'react'
import { Browsercont,Browsercard } from './rightsearch.style'
import { Head3 } from '../home/right.style'
import CardBrowser from './CardBrowser'
import {random } from '../../utilities'
import {browse} from '../../assets/resource/contents'

function random_item(random)
{
  
return random[Math.floor(Math.random()*random.length)];
     
}

const Browser = () => {

  return (
    <Browsercont>
        <Head3>Browse</Head3>
        <div className="bottom">
          {browse.map((cont)=>{
              return(
                 <CardBrowser name = {cont.name} img= {cont.pic} color = {random_item(random)}/> 
              )
          })}
        </div>
    </Browsercont>
  )
}

export default Browser

 