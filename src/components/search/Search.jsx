import React from 'react'
import Left from '../../containers/left/Left'
import { SearchContainer } from './search.style'
import Rightsearch from '../../containers/search/Rightsearch'

const Search = () => {
  return (
    <SearchContainer>
      <Left /> 
      <Rightsearch />
    </SearchContainer>
  )
}

export default Search