import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

    const [userdata , setuserdata] = useState([])
    const [myage , setmyage] = useState("")
    const [myrollno , setmyrollno] = useState("")
    const [myname , setmyname] = useState("")
    const [mycity , setmycity] = useState("")


    const {id} = useParams()

    useEffect(function(){
        
    Axios.get(`https://student-management-system-backend-efji.onrender.com/read/data/${id}`).then(function(output){
        output.data.map(function(i){
            setmyage(i.age)
            setmyname(i.name)
            setmycity(i.city)
            setmyrollno(i.rollNo)
        })

        


        setuserdata(output.data)
    }).catch(function(error){
        console.log(error)
    })
    },[])



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

  return (
    <div className='row'>
    <div className='col-md-6'>

    <form>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age"  value={myage}/>

    <label for="rollNo">Roll No:</label>
    <input type="text" id="rollNo" name="rollNo" value={myrollno} disabled />

    <label for="city">City:</label>
    <input type="text" id="city" name="city" value={mycity}/>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value={myname}/>

    <input type="submit" value="Submit"  />
</form>
    </div>
    
</div>
  )
}

export default Update