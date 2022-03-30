import React, {useState} from 'react'
import swal from 'sweetalert';
import Spinner from './Spinner';
const Home = () => {
    const [user, setUser] = useState({title:'',email:'', message:'', count:1, format:'text'});
    const [loading, setLoading] = useState(false)
    const handleOnChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }
    const handleOnSubmit = async (e)=>{
        setLoading(true)
        e.preventDefault();
        const host = "https://aulthapis.herokuapp.com/api/emailspam/send"
        const response = await fetch(host, {
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body: JSON.stringify({title:user.title, email:user.email, message:user.message, count:user.count, format:user.format})
        })
        const data = await response.json();
        console.log(data);
        setLoading(false)
        swal("Success", data.message, "success");
    }
  return (
    <>
    <div style={{minHeight:'calc(100vh - 104px)'}} className="md:items-center w-full box-border p-2 flex  items-start justify-center pt-2">
        <form onSubmit={handleOnSubmit} className="md:w-1/2 form rounded w-full h-full box-border p-3 glassmorphism flex flex-col justify-center items-center">
            <input type="text" id='title' onClick={()=>document.getElementById('title').select()}  onChange={handleOnChange} name="title" className='w-full p-2 glassmorphism my-1 focus:outline-none' placeholder='Title..'/>
            <input type="email" id='email' onClick={()=>document.getElementById('email').select()}  onChange={handleOnChange} name="email" className='w-full p-2 glassmorphism my-1 focus:outline-none' placeholder='Enter email (for more than one, seprate by comma) ' multiple required/>
            <div className="w-full box-sizing flex items-center border-box p-2">
                <input type="radio" className='cursor-pointer my-1' name='format'  onChange={handleOnChange} value="text"/> Text
                <input type="radio" name='format' className='cursor-pointer ml-2' onChange={handleOnChange} value="html"/> HTML
            </div>
            <textarea id='message' onClick={()=>document.getElementById('message').select()} onChange={handleOnChange} name="message" className='w-full glassmorphism my-1 p-2 focus:outline-none h-40' placeholder={user.format==='text'?'Type your message':"Type or paste your html codes"} />
            <input type="number" onChange={handleOnChange} name="count" className='w-full p-2 glassmorphism my-1 focus:outline-none' placeholder='Count'/>
            <button type="submit"  className='w-full p-2 my-1 gr-color focus:outline-none  cursor-pointer flex justify-center glassmorphism'>{loading?<Spinner/>:"Boom"} </button>
        </form>
    </div>
    </>
  )
}

export default Home