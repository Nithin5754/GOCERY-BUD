const List = ({id,title,handleEdit,handleDelete}) => {
  return (
    <article className="grocery-item">
        <p className="title">{title}</p>
        <div className="btn-container">
            <button className="edit-btn" onClick={()=>handleEdit(id)}>edit</button>
            <button className="delete-btn" onClick={()=>handleDelete(id)}>delete</button>
        </div>
    </article>
  )
}
export default List


