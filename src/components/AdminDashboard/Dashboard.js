import React from 'react'
import { useState } from 'react'


export default function Dashboard() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <>
            <div>
                <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
                    <div className={nav ? 'logo dark' : 'logo'}>
                        <h2>King Flyer</h2>
                    </div>
                    <ul className="nav-menu">
                        <li><button className="butt">Update Flights</button></li>
                        <li><button className="butt">Add Flights</button></li>
                        <li><button className="butt">Delete Flights</button></li>
                        <li><button className="butt">All Flights</button></li>
                    </ul>
                </div>
            </div>

        </>


    )
}
