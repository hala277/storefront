import { connect } from "react-redux";
import { remove } from '../../store/cart'
import {Card,Typography,CardActions} from '@mui/material'
import { Button } from "@mui/material";

const Cart = props => {
    console.log(props.Cart,'carttttttttttt')
return(
   
    <Card elevation={3}>
{props.Cart.map(item => {
    return(
       <CardActions>
                <Typography>{item.name}</Typography>
            
            <Button onClick={() => props.remove(item)} style={{color:'red'}}> x </Button>
            </CardActions>
    )
})}
    </Card>
)
}

const mapStateToProps = state => ({
    Cart:state.cart
}) ;

const mapDispatchToProps = {remove};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);