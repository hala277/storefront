import { connect,useSelector,useDispatch } from "react-redux";
import { Grid, Card } from '@mui/material';
import { CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import { addTo } from '../../store/cart';
import { useEffect } from "react";
import {getProd} from '../../store/products';




const Product = props => {
    // console.log(props.products, 'yyyyyyyyyyyyyyy')
    // console.log(props.activeCategory, 'actiiiveeeeeee')

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProd());
    },[dispatch]);

    return (
        <>
            {/* <img>{prod.image}</img> */}
            <Grid container spacing={1} direction='row' justifyContent='space-evenly' alignItems='center' >

                {products.map((prod, i) => {


                    if (props.activeCategory === prod.category)
                        return (
                            <Card key={i} elevation={3} style={{ marginTop: '100px', marginBottom: '100px' }}>

                                <CardMedia image={prod.image} height="250" width="400" component='img' />
                                <CardContent>
                                    <p>{prod.name}</p>
                                    <Typography >{prod.name}</Typography>
                                    <Typography > {prod.description}</Typography>
                                    <Typography>{prod.price}</Typography>
                                    <Typography >{prod.inventoryCount}</Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" onClick={() =>props.addTo(prod) }>ADD TO CART</Button>
                                    <Button size="small">VIEW DETAILS</Button>
                                </CardActions>
                            </Card>
                        )
                })

                }
            </Grid>
        </>
    )


}
const mapStateToProps = state => ({
    // products: state.store.products,
    activeCategory: state.store.activeCategory
});

const mapDispatchToProps = {addTo};

export default connect(mapStateToProps,mapDispatchToProps)(Product);