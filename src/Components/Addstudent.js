import React, { useState } from 'react'
import "../AddStudent.css"
import  Axios  from 'axios'

const Addstudent = () => {

    const [formdata , setformdata] = useState(
        {
            age:"",
            rollNo:"",
            city:"",
            name:"" 

        }
    )

    function collectdata(event){
        setformdata({...formdata , [event.target.name] : event.target.value})

    }

    async function displaydata(event){
        event.preventDefault()

       const result = await Axios.post("https://student-management-system-backend-efji.onrender.com/collect" , {formdata})

       
    }
  return (  
    <div className='container'>
    
    <h2>Student Information</h2>
    <form onSubmit={displaydata}>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age"  onChange={collectdata} />

        <label for="rollNo">Roll No:</label>
        <input type="text" id="rollNo" name="rollNo" onChange={collectdata} />

        <label for="city">City:</label>
        <input type="text" id="city" name="city" onChange={collectdata}/>

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" onChange={collectdata}/>

        <input type="submit" value="Submit"  />
    </form>

</div>
  )
}

export default Addstudent