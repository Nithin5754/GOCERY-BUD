import React, { useState, useEffect } from 'react'
import Lists from './Lists'
import Alert from './Alert'

const Grocery = () => {
  const [isName,setName]=useState('')
  const [isList,setList]=useState([])
  const [isEditing,setEditing]=useState(false)
  const [isEditId,setEditId]=useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!isName){

    }else if(isName&&isEditing){
      const findEditing=isList.filter((list)=>list.id===isEditId)
      findEditing[0].title=isName
      setEditing(false)
          
    }
    else{
      let fakeId= Date.now()
      let newName={id:fakeId,title:isName}
      setList([...isList,newName])
      setName('')
    }
   
  }
  const handleEdit=(id)=>{
 const editList=isList.filter((list)=>list.id===id)

 setEditId(editList[0].id)
 setEditing(true)
 setName(editList[0].title)
  }
  const handleDelete=(id)=>{
      const deleteList=isList.filter((list)=>list.id !==id)
      setList(deleteList)
  }
  const handleAllClear=()=>{
    setList([])
  }
  return (
    <section className="section-center">
      <h2 style={{textAlign:'center'}}>Gocery List</h2>
    <form  className="grocery-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='eg:carrot' value={isName}  onChange={(e)=>setName(e.target.value)}/>
      <button type='submit' className='btn'>{isEditing?'edit':'submit'}</button>
      </div>
    </form>

  
        {
          isList.length>0 &&  <div  className="grocery-container">
          <Lists isList={isList} handleEdit={handleEdit} handleDelete={handleDelete} />
          <div className="grocery-btn">
            <button className='clear-btn' type='button' onClick={handleAllClear}> clear btn</button>
          </div>

         </div>
        }
   
</section>
  )
}
export default Grocery