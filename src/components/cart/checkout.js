import { Paper, Typography, List, ListItem } from "@mui/material";
import { connect } from "react-redux";


function Checkout({ cart }) {

    return (
        <form>

            <Paper>
                <Typography variant='h5' gutterBottom>
                    Order Summary
                </Typography>

                <List disablePadding>
                    {cart.items.map((product) => (
                        <ListItem key={product.id}>

                            <ListItemText primary={product.name} secondary={product.description} />
                            <Typography variant="body2">${product.price.toFixed(2)}</Typography> 
                        </ListItem>


                    ))}

                </List>
            </Paper>
        </form>
    )
}

const mapStateToProps = state => ({
    cart:state.cart,
})

export default connect(mapStateToProps)(Checkout)