import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Readone = () => {

    const { id } = useParams()
    const [singleData , setdata] = useState([])

    useEffect(function(){
        Axios.get(`https://student-management-system-backend-efji.onrender.com/read/data/${id}`).then(function(output){
            setdata(output.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])
  return (
    <div>

     {
        singleData.map(function(i){
            return <div>
                <h1>Name : {i.name}</h1>
                <h1>Roll no : {i.rollNo}</h1>
                <h1>City :{i.city}</h1>
                <h1>Age : {i.age}</h1>
            </div>
        }) }


    </div>
  )
}

export default Readone