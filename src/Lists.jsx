import List from './List'
import React from 'react'
const Lists = ({isList,handleEdit,handleDelete}) => {
  return (
  <div className="grocery-list">
      {
        isList.map((list)=>{
          return(
           < List {...list} key={list.id} handleEdit={handleEdit} handleDelete={handleDelete}/>
          )
        })
      }
  </div>
  )
}

export default Lists
