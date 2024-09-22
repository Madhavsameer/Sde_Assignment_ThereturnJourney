import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const ItemList = () => {
  const { items, searchTerm } = useSelector((state) => state.items)

  const filteredItems = React.useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [items, searchTerm])

  return (
    <ul className="bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-200">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <li className="p-4 text-center text-gray-500">No items found</li>
      )}
    </ul>
  )
}

export default ItemList
