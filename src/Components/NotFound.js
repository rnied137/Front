import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {

    let location = useLocation();

    return (
        <div>
           You tried to enter {location.pathname} but it is not there. 
           Only found kittens here. Go back to home.
        </div>
    )
}


export default NotFound;