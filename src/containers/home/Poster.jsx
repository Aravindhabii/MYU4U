import React from 'react'
import { Postercontainer, Button, Button2, Head1, Head2, Head3 } from './right.style'

const Poster = () => {
  return (
    <Postercontainer>
      <div className="shutter"></div>
      <div className="left">
        <Head1>Top Playlist</Head1>
        <Head2>Rock</Head2>
        <Head1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Head1>
        <Head1>80 songs, 5hrs</Head1>
      </div>
      <div className="right">
        <Button>Play</Button>
        <Button2>Follow</Button2>
      </div>
    </Postercontainer>
  )
}

export default Poster