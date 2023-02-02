import React from 'react'
import { useEffect } from 'react';
import { Postercontainer, Button, Button2, Head1, Head2, Head3 } from './right.style'

const Poster = ({randno,data}) => {
  var gotdata = data[randno];
  console.log(gotdata);
  return (
    <Postercontainer>
      <div className="shutter"></div>
      <div className="left">
        <Head1>Top Playlist</Head1>
        <Head2>Happyhits</Head2>
        <Head1>This is a playlist or a genre of music that typically features upbeat </Head1>
        <Head1>{data.length} songs, {Math.floor(data.length*4/60)} hrs</Head1>
      </div>
      <div className="right">
        <Button>Play</Button>
        <Button2>Follow</Button2>
      </div>
    </Postercontainer>
  )
}

export default Poster