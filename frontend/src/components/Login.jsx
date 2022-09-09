import React, { useState } from 'react'
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from './Firebase';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
 

const Login = ({childToParent}) => {

    const [registerEmail,setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('')
    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('')

    const [user, setUser] = useState({})

    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    childToParent(user)

   
    const login = async () =>{
      try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        // console.log(user)
        alert("Login  successfully!")

        }catch(error){
            console.log(error)
            alert(error.message)
        }
    }
    const logout= async() =>{
      await signOut(auth)
    }
  return (
    <div style={{height:'100vh'}}> 
      <div style={{display:'grid',gap:'10px',maxWidth:'600px', margin:'100px auto', backgroundColor:'#ffffff', borderRadius:'10px'}}>
           <br />
          <div style={{display:'grid', justifyContent:'center'}}> 
              <input style={{backgroundColor:'#E8F0FE', width:'400px', height:'35px', borderRadius:'5px', padding:'5px 20px'}} type="email" placeholder='Email...' onChange={(e)=>setLoginEmail(e.target.value)} />
              <br />
              <input style={{backgroundColor:'#E8F0FE', width:'400px', height:'35px', borderRadius:'5px', padding:'5px 20px'}} placeholder='Password...' onChange={(e)=>setLoginPassword(e.target.value)} />
              <br />
              <button style={{backgroundColor:'black', borderRadius:'5px', padding:'5px 10px', color:'white', fontWeight:'bold', width:'fit-content', margin:'auto'}} onClick={login}>Login User</button>
          </div> 
          <div style={{display:"flex", alignItems:'center', justifyContent:'space-between', padding:'10px 50px'}}> 
            <p style={{fontWeight:'600'}}>{user?.email}</p> 
            <button style={{backgroundColor:'black', borderRadius:'5px', padding:'5px 10px', color:'white', fontWeight:'bold', width:'fit-content', }} onClick={logout}>Sign Out</button>
          </div> 
          
          <hr />
          <div>
            <p>Need to create account ? <span><Link style={{color:'green'}} to='/signup'>SIGN UP</Link></span></p>
          <br />
          </div>
      </div>
    </div>
  )
  
}

export default Login
