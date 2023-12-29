import React, { useEffect } from 'react'

const Alert = ({show,msg,type,setAlert}) => {
  useEffect(()=>{
    const timer=setTimeout(() => {
      setAlert({show:false,msg:'',type:''})
    }, 1000);
    return ()=>clearTimeout(timer)
  },[show])
  return <div className={ `alert alert-${type}`}>{msg}</div>
}

export default Alert
