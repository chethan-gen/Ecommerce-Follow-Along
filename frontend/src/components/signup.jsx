import "./signup.css";
import React from 'react'

const signup = () => {
    const[userDetail,setUserDetails] = useState({
        name:"",
        email:"",
        password:"",
    })
    function handleInput(event){
        console.log(event.target.value);
        setUserDetails({...setUserDetails,[event.target.name]:event.target.value0})
    }

    async function handleSuubmit(){
        if(userDetail.name==""){
            alert("Please enter your name");
            return;
        }if(userDetail.email==""){
            alert("Please enter your email");
            return;
        }  if(userDetail.password==""){
            alert("Please enter your password");
            return;
        }
        try {
            const data = await axios.post("https://localhost:8000/user/signup");
            console.log(data);
            alert("User created");
        } catch (error) {
            console.log(error)
            alert("something went wrong");
        }
    }


  return (
    <div  className="regis-box">
        <form action="" onSubmit={handleSuubmit}>
            <label htmlFor="">Name</label>
            <input type="text"name='name'placeholder='Name...'  onChange={handleInput}/>
            <label htmlFor="">Email</label>
            <input type="email"name='email'placeholder='Email...'  onChange={handleInput}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder="password..."  onChange={handleInput}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default signup