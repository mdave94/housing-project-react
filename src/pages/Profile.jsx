import { getAuth,signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Profile = () => {
  const auth = getAuth()

  const [formData,setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })

const navigate = useNavigate()

//getting the structure
const {name,email}  = formData


const onLogout = ()=>{
  auth.signOut()
  navigate('/')
}
 
  return <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button className="logOut" onClick={onLogout}>Logout</button>
    </header>
  </div>
}

export default Profile
 