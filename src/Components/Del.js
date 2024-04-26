import Axios  from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Del = () => {
    const {id} = useParams()
    const [message,setmessage] = useState()
    console.log(id)
    Axios.delete(`https://student-management-system-backend-efji.onrender.com/delete/data/${id}`).then(function(output){
        setmessage(output.data)
    }).catch(function(error){
        console.log(error)
    })
  return (
    <div>

    {message}

    </div>
  )
}

export default Del