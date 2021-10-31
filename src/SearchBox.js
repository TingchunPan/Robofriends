import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
  <input className='pa3 ba b--green bg-lightst-blue'
   type='sea rch' 
  placeholder='Search Kittens' 
  onChange={searchChange}
  />
    </div>
    )
}

export default SearchBox;