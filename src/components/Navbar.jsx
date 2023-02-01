import { useNavigate,useLocation } from "react-router-dom"
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'



const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const PathMatchRoute = (route) =>{
        if(route === location.pathname){
            return true
        }
    }

  return (
    <div>
      <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={()=> navigate('/')}>
                        <ExploreIcon fill={PathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px"/>
                        <p className={PathMatchRoute('/') ? 'navbarListItemNameActive': 'navbarListItemName' }>EXPLORE</p> 

                    </li>

                    <li className="navbarListItem" onClick={()=> navigate('/offers')}>
                        <OfferIcon fill={PathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px"/>
                        <p className={PathMatchRoute('/offers') ? 'navbarListItemNameActive': 'navbarListItemName' }>OFFERS</p> 
                    </li>

                    <li className="navbarListItem" onClick={()=> navigate('/profile')}>
                        <PersonOutlineIcon fill={PathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width="36px" height="36px"/>
                        <p className={PathMatchRoute('/profile') ? 'navbarListItemNameActive': 'navbarListItemName' }>PROFILE</p> 
                    </li>
                </ul>
            </nav>
      </footer>
    </div>
  )
}

export default Navbar
