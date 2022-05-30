import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';






export default function Header() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor:'black'}}>
                <Toolbar variant="dense" >
                    <Typography  style={{marginRight:'75%'}} variant="h5" color="inherit" component="div">
                        OUR STORE
                    </Typography>

               <div style={{marginRight:'100px'}}>
                    <IconButton aria-label="cart" size='large' edge='start' color='inherit'   >
                        <Badge badgeContent={4} color="secondary" >
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}