import { useState } from 'react'
import './NavbarStyles.css'
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

//install mui components first for this file to run 
function Navbar() {
    function MDrawer() {
        const [isDrawerOpen, setIsDrawerOpen] = useState(false)
        return (
            <>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Box>
                <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                    <Box p={2} width='250px' height='50px' textAlign='center' role='presentation'>
                        <Typography variant='h6' component='div'>
                            side panel
                        </Typography>

                    </Box>
                </Drawer>
                </Box>
            </>

        )
    }
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>King Flyer</h2>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>FAQ</li>
                <li><MDrawer /></li>
            </ul>




            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>


                </ul>

            </div>
        </div>
    )
}



export default Navbar
