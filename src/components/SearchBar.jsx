import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../store/itemsSlice'

const SearchBar = () => {
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <input
      type="text"
      placeholder="Search items..."
      className="w-full p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
      onChange={handleSearch}
    />
  )
}

export default SearchBar
