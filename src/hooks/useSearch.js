import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../store/itemsSlice'

export const useSearch = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.items.searchTerm)

  const updateSearchTerm = (value) => {
    dispatch(setSearchTerm(value))
  }

  return [searchTerm, updateSearchTerm]
}
