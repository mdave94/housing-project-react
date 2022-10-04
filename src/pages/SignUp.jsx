import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import ForgotPassword from "./ForgotPassword"
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {db} from '../firebase.config'
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'


const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [formData,setFormData] = useState({
    name: '',
    email:'',
    password:''
  })

  const {email,password,name} = formData

  const navigate = useNavigate()


  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }



  const onSubmit = async (e) =>{
    e.preventDefault()

    try{
        const auth = getAuth()

      const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
      
      const user = userCredentials.user


      //from firebase
      updateProfile(auth.currentUser,{
        displayName: name})

        // needs becouse of password's delete
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

        await setDoc(doc(db,'users',user.uid),formDataCopy)

      //back to homepage
      navigate('/')

    }catch (error ){
      console.log(error)
    }

  }


  return (
    <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">Welcome !</p>
          </header>

        <form onSubmit={onSubmit}>
        <input type="text" 
                 className="nameInput"
                 placeholder="Name"
                 id="name" value={name} 
                 onChange={onChange}/>
          <input type="email" 
                 className="emailInput"
                 placeholder="Email"
                 id="email" value={email} 
                 onChange={onChange}/>


          <div className="passwordInputDiv">
            <input  type = {showPassword ? 'text' :'password'} 
                    className="passwordInput" 
                    placeholder="Password" 
                    value = {password}
                    id="password"
                    onChange = {onChange}
            />

            <img src={visibilityIcon} 
                 alt="show password"
                 className="showPassword"
                 onClick={()=>setShowPassword((prevState)=>!prevState)} />
          </div>

        <Link to ='/forgot-password' className="forgotPasswordLink">
          Forgot Password
        </Link>

        <div className="signUpBar">
          <p className="signUpText"> Sign Up </p>
          <button className="signUpButton">
            <ArrowRightIcon fill='#ffffff' width= '34px' height='34px'/>
          </button>
        </div>



        </form>


      {/* GOOGLE OAUTH */}
      <Link to = '/sign-up' className="registerLink">
        Sign In instead
      </Link>


        </div>
    </>
  )
}

export default SignUp
