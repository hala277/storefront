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
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom >
                            Billing Address
                        </Typography>
                        <TextField id="name" name="name" label="Full Name" />
                        <TextField id="address" name="address" label="Address" />
                        <TextField id="city" name="city" label="City" />
                        <TextField id="state" name="state" label="State" />
                        <TextField id="zip" name="zip" label="zip" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom >
                            Payment details
                        </Typography>
                        <TextField id="cc_number" name="cc_number" label="Credit Card #" />
                        <TextField
                            id="date"
                            label="Expiration"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField id="cvv" name="cvv" label="CVV" />
                    </Grid>

                </Grid>

                <Grid container alignItems="center" justify="center" spacing={5}>
                    <Grid item>
                        <Button variant="contained" color="primary">Place Your Order</Button>
                    </Grid>
                </Grid>

            </Paper>
        </form>
    )
}

const mapStateToProps = state => ({
    cart: state.cart,
})

export default connect(mapStateToProps)(Checkout)