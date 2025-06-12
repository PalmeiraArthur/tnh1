import React from 'react'

import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  return (
    <div className='m-2 text-white' id='Search Bar'>
        <label><button><FaSearch color='bejeTNH1'/></button></label>
        <input

            type="text"
            className='w-[400px] h-[50px] bg-cinzaClaroTNH1 border-2 border-cinzaClaroTNH1 rounded-md px-4 focus:outline-none'
            placeholder='Pesuisar...'
        />
    </div>
  )
}

export default SearchBar