import React from 'react'

const Item = React.memo(({ item }) => {
  return (
    <li className="p-4 bg-white border-b border-gray-200 last:border-none hover:bg-gray-50 transition-colors duration-200 ease-in-out rounded-lg shadow-sm">
      {item}
    </li>
  )
})

export default Item
