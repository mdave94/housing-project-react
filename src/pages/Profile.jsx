import { getAuth,updateProfile } from "firebase/auth"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {updateDoc,doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import { toast } from "react-toastify"
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'



const Profile = () => {
  const auth = getAuth()

  const [changeDetails,setChangeDetails] = useState(false)
  
  const [formData,setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email
  })

const navigate = useNavigate()

//getting the structure
const {name,email}  = formData


const onSubmit= async ()=>{
  try {
    if(auth.currentUser.displayName !==name){
      //update display name
      await updateProfile(auth.currentUser,{
        displayName:name
      })

      //update in firestore as well
      const userRef = doc(db,'users',auth.currentUser.uid)

      await  updateDoc(userRef,{
        name:name // I shall give only name param, bc of this  duble name
      })

    }
  } catch (error) {
    toast.error('Could not update profile  details')
  }
}


const onChange=(e)=>{
  setFormData((prevState)=>({
    ...prevState,
    [e.target.id]:e.target.value
  }))
}

const onLogout = ()=>{
  auth.signOut()
  navigate('/')
}
 
  return <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button className="logOut" onClick={onLogout}>Logout</button>
    </header>

    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">
          Personal Details
        </p>
        <p className="changePersonalDetails" onClick={()=>{
          changeDetails && onSubmit()
          setChangeDetails((prevState)=>!prevState)
        }}>
          {changeDetails ? 'done':'change'}
        </p>
      </div>
      <div className="profileCard">
        <form>
          <input type="text" id="name" className={!changeDetails ? 'profileName': 'profileNameActive'}
          disabled={!changeDetails}
          value={name}//this  is from the formData's datastucture
          onChange={onChange}
          />

          <input type="text" id="email" className={!changeDetails ? 'profileEmail': 'profileEmailActive'}
          disabled={!changeDetails}
          value={email}//this  is from the formData's datastucture
          onChange={onChange}
          />
        </form>
      </div>

      <Link to = '/create-listing' className="createListing">
        <img src={homeIcon} alt="home"/>
        <p>Sell or rent your home</p>
        <img src={arrowRight} alt =' arrow right '/>
      </Link>
    </main>


  </div>
}

export default Profile
 