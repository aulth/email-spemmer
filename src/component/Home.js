import React, {useState} from 'react'
import swal from 'sweetalert';
const Home = () => {
    const [user, setUser] = useState({email:'Enter email (for more than one, seprate by comma) ', message:'Type your message ', count:1});
    const handleOnChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }
    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        const host = "https://aulthapis.herokuapp.com/api/emailspam/send"
        const response = await fetch(host, {
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body: JSON.stringify({email:user.email, message:user.message, count:user.count})
        })
        const data = await response.json();
        console.log(data);
        swal("Success", data.message, "success");
    }
  return (
    <>
    <div style={{minHeight:'calc(100vh - 104px)'}} className="w-full box-border p-2 flex justify-center bg-gray-200 pt-2">
        <form onSubmit={handleOnSubmit} className="md:w-1/2 w-full box-border p-2 flex flex-col items-center">
            <input type="email" id='email' onClick={()=>document.getElementById('email').select()}  onChange={handleOnChange} name="email" className='w-full p-2 border border-gray-400 my-1 focus:outline-none' value={user.email} multiple required/>
            <textarea id='message' onClick={()=>document.getElementById('message').select()} onChange={handleOnChange} name="message" className='w-full p-2 border border-gray-400 my-1 focus:outline-none h-40' value={user.message} />
            <input type="number" onChange={handleOnChange} name="count" className='w-full p-2 border border-gray-400 my-1 focus:outline-none' placeholder='Count'/>
            <input type="submit"  className='w-full p-2 border border-gray-400 my-1 focus:outline-none hover:bg-gray-700 cursor-pointer bg-gray-800 text-white' value={"Boom"} />
        </form>
    </div>
    </>
  )
}

export default Home