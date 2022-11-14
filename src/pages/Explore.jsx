import { Link } from "react-router-dom"
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>


      <main>
        {/*Slider*/}

        <p className="exploreCategoryHeading">Categories</p>

        <div className="exploreCategories">
          <Link to = '/category/rent'>
            <img alt='rent'
            className="exploreCategoryImg"
            src={rentCategoryImage}/>
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to = '/category/sale'>
            <img alt='sell'
            className="exploreCategoryImg"
            src={sellCategoryImage}/>
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>



    </div>
  )
}

export default Explore
