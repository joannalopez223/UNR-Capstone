 
import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import './SearchRequest.css'


export const SearchRequest = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 100)

  return (
    <div className = "SearchRequest" > 
      Search: {' '} 
      <input className = "inp"
        placeholder="Search"
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  )
}


