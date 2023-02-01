import React from 'react'
import { useState,useEffect } from 'react'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useRef } from 'react'

const CreateListing = () => {
    const [loading,setLoading] = useState(false)
    const [geolocationEnabled,setGeolocationEnabled] = useState(true)
    const [formData, setFormData] = useState({
        type:'rent',
        name:'',
        bedrooms: 1,
        bathrooms:1,
        parking:false,
        furnushed:false,
        address:'',
        offer: false,
        regularPrice:0,
        discountd: false,
        images:{},
        latitude:0,
        longitude: 0
    })

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)


    useEffect(()=>{
        if (isMounted){
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    setFormData({...formData,userRef: user.id})
                }else{
                    navigate('/sign-in')
                }
            })
        }

        return ()=>{
            isMounted.current = false
        }
    },[])


    if(loading){
        return <Spinner/>
    }

  return (
    <div>
      Create
    </div>
  )
}

export default CreateListing
