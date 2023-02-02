import React from 'react'
import Left from '../../containers/left/Left'
import Rightsearch from '../../containers/search/Rightsearch'

const Search = (props) => {
  return (
    <>
      <Rightsearch Adata = {props.Adata}/>
    </>
  )
}

export default Search