import React from 'react'
import { Link } from 'react-router-dom'

// Page not found component
const NotFound = () => {
  return (
    <div className='app__container'>
        <div className='not_found__container'>
            <p>Page Not Found</p>

            {/* Contact link */}
            <li>
                <Link to='/' className='ul-text'>
                    Home Page
                </Link>
            </li>
        </div>
    </div>
  )
}

export default NotFound