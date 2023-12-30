import React from 'react'
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const SearchBar = () => {
  return (
    <div className="search-bar">
    <div className="above-div">
      <div className="icon-search">
      <FontAwesomeIcon icon={faMagnifyingGlass} size="xs"/>
      </div>
      <div className="below-div"></div>
    </div>
  </div>
  )
}

export default SearchBar