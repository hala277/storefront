import { connect } from "react-redux";
import { removeFrom } from '../../store/cart'
import {Card,Typography,CardActions} from '@mui/material'
import { Button } from "@mui/material";

const Cart = ({removeFrom,cart}) => {
    // console.log(props,'carttttttttttt')
return(
   
    <Card elevation={3}>
{cart.items.map(item => {
    return(
       <CardActions>
                <Typography>{item.name}</Typography>
            
            <Button onClick={() => removeFrom(item)} style={{color:'red'}}> x </Button>
            </CardActions>
    )
})}
    </Card>
)
}

const mapStateToProps = state => ({
    cart:state.cart
}) ;

const mapDispatchToProps = {removeFrom};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);