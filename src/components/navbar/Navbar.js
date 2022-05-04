import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavbarStyles.css'
import Popup from

    function Navbar() {
        const [nav, setNav] = useState(false)
        const handleNav = () => setNav(!nav)

        return (
            <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
                <div className={nav ? 'logo dark' : 'logo'}>
                    <h2>King Flyer.</h2>
                </div>
                <ul className="nav-menu">
                    <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                    <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                    <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                    <button className="btn" onClick="Popup"> Login/Sign-up </button>
                    <Popup />
                </ul>




                <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                    <ul className="mobile-nav">
                        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                        <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                        <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                        <button className="btn" onClick={() => this.openModal()}>Open Modal</button>

                    </ul>

                </div>







            </div>
        )
    }


class Sample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            loading: false,
            error: null
        };
    }



    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }



}


export default Navbar
