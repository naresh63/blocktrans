import React from 'react'
import { Outlet } from 'react-router-dom';

import {Container, Grid} from '@mui/material';
import img1 from '.././assets/img1.jpg';


function Layout() {
  return (
    <div style={{
        background: 'grey',
    }}>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={6}>
                    <img src={img1} alt='img1' style={{
                        
                        width: '100%',
                        height: '100%',
                    }} />
                   
                </Grid>
                <Grid item lg={6}
                  style={{
                    border: '1px solid green',
                    width: '500px',
                    height: '500px',
                  }}
                >
                <Outlet/>

                </Grid>
            </Grid>

      
        <h1> Layout page </h1>

        <div>
            <h2> checking ---- for children </h2>
            <div 
            >
              
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Layout