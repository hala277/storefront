import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';





 function Header(props) {
    return (
        <>
            <AppBar position="static" style={{backgroundColor:'black'}}>
                <Toolbar variant="dense" >
                    <Typography  style={{marginRight:'75%'}} variant="h5" color="inherit" component="div">
                        OUR STORE
                    </Typography>

               <div style={{marginRight:'90px'}}>
                    <IconButton aria-label="cart" size='small' edge='start' color='inherit'   >
                    CART({props.Cart.length})
                        {/* <Badge badgeContent={props.Cart.length} color="secondary" >
                           
                            <ShoppingCartIcon />
                        </Badge> */}
                    </IconButton>
                   
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

const mapStateToProps = state => ({
    Cart : state.cart
});

export default connect(mapStateToProps)(Header);