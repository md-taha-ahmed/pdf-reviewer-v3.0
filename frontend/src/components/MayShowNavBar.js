import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const MayShowNavBar = ({children}) => {
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        console.log('this location:', location)
        if (location.pathname === '/pdf') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])
    return (
        <div>{showNavBar && children}</div>
    )
}

export default MayShowNavBar