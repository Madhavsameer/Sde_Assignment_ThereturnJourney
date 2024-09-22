import React from 'react'
import SearchBar from './components/SearchBar'
import ItemList from './components/ItemList'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Item Search
        </h1>
        <SearchBar />
        <ItemList />
      </div>
    </div>
  )
}

export default App
