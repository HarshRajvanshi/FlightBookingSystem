import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



const page1 = 'Update Flight';
const page2 = 'Add Flight';
const page3 = 'All Flight';


const href1 = '';
const href2 = '';
const href3 = '';

const ResponsiveAppBar = () => {



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        King Flyer
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            key={page1}
                            href={href1}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page1}
                        </Button>

                        <Button
                            key={page2}
                            href={href2}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page2}
                        </Button>

                        <Button
                            key={page3}
                            href={href3}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page3}
                        </Button>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;