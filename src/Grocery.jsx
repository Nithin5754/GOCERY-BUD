import React, { useState, useEffect } from 'react'
import Lists from './Lists'
import Alert from './Alert'



const handleLocalStorage=()=>{
  let list=localStorage.getItem('list')
  if(list){
   try {
    return JSON.parse(localStorage.getItem('list'))
   } catch (error) {
    console.error("Error parsing JSON from local storage", e);
    return []
   }
  }else{
    return []
  }
}

const Grocery = () => {
  const [isName,setName]=useState('')
  const [isList,setList]=useState(handleLocalStorage())
  const [isEditing,setEditing]=useState(false)
  const [isEditId,setEditId]=useState(null)
  const [isAlert,setAlert]=useState({show:false,msg:'',type:''})


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!isName){
     return showAlert(true,'empty input','danger')
    }else if(isName&&isEditing){
    //   const findEditing=isList.filter((list)=>list.id===isEditId)
    //   findEditing[0].title=isName
    //   setEditing(false)
    //   showAlert(true,'item edited to the list','success')
        setList(isList.map((list)=>{
          console.log(list," ",isEditId);
          if(list.id===isEditId){
            console.log("hello");
            return  {...list,title:isName}
          }
          return list
        }))
          setEditing(false)
            showAlert(true,'item edited to the list','success')
    }

    else{
      let fakeId= Date.now()
      let newName={id:fakeId,title:isName}
      setList([...isList,newName])
      setName('')
      showAlert(true,'item added to the list','success')
    }
   
  }
  const handleEdit=(id)=>{
 const editList=isList.find((list)=>list.id===id)
 console.log(editList);
 setEditId(editList.id)
 setName(editList.title)

//  setEditId(editList[0].id)
 setEditing(true)
//  setName(editList[0].title)
  }
  const handleDelete=(id)=>{
      const deleteList=isList.filter((list)=>list.id !==id)
      setList(deleteList)
      setAlert(true,'item deleted from the list','danger')
  }
  const handleAllClear=()=>{
    setList([])
    showAlert(true,'item deleted from the list','danger')
    setName('')
  }

const showAlert=(show=false,msg='',type='')=>{
  setAlert({show,msg,type})
}

useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(isList))
    },[isList])

  return (
    <section className="section-center">
      <h2 style={{textAlign:'center'}}>Gocery List</h2>
      {isAlert&&<Alert {...isAlert} setAlert={setAlert}/>}
    <form  className="grocery-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='eg:carrot' value={isName}  onChange={(e)=>setName(e.target.value)}/>
      <button type='submit' className='btn'>{isEditing?'edit':'submit'}</button>
      </div>
    </form>

  
        {
          isList.length>0 &&  <div  className="grocery-container">
          <Lists isList={isList} handleEdit={handleEdit} handleDelete={handleDelete}  />
          <div className="grocery-btn">
            <button className='clear-btn' type='button' onClick={handleAllClear}> clear btn</button>
          </div>

         </div>
        }
   
</section>
  )
}
export default Grocery