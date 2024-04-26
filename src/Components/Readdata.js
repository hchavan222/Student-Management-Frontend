import React, { useEffect, useState } from 'react'

import Axios from 'axios'
import { Link, Outlet, Route, Routes } from 'react-router-dom'


const Readdata = () => {

    const [data,setdata] = useState([])

    useEffect(function(){

        Axios.post("https://student-management-system-backend-efji.onrender.com/read").then( function(output){

        //   console.log(output.data)
          setdata(output.data)
            

        }).catch(function(error){
            console.log(error)
        })  

        

    },[])

    // console.log(data)
  return (
    <div className='row'>

<Outlet />

<div className='col-md-6'>

<table className='table table-light table-striped-columns'>
<thead>
    <th>NAME</th>   
    <th>ACTION</th>
    <th>ACTION</th>
    <th>ACTION</th>
    {/* <th>CITY </th> */}
</thead>
<tbody>

    {
        data.map(function(i){

            return <tr>
                <td>{i.name}</td>
                
                
                <td><Link className='btn btn-outline-primary' to={`/students/${i.rollNo}`}>View</Link></td>
                <td><Link className='btn btn-outline-success' to={`/students/edit/${i.rollNo}`}>Update</Link></td>
                <td><Link className='btn btn-outline-danger' to={`/students/delete/${i.rollNo}`}>Delete</Link></td>
                {/* <td>{i.city}</td> */}
            </tr>

        })

    }
</tbody>

</table>



</div>

   
</div>
  )
}

export default Readdata