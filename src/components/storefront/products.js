import { connect,useSelector,useDispatch } from "react-redux";
import { Grid, Card } from '@mui/material';
import { CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";
import { addTo } from '../../store/cart';
import { useEffect } from "react";
import {getProducts} from '../../store/products';
import { Link } from 'react-router-dom';





const Product = props => {
    // console.log(getProd, 'yyyyyyyyyyyyyyy')
    console.log(props, 'actiiiveeeeeee')

    const {activeCategory , products, addTo , getProducts} = props;
    
    // const dispatch = useDispatch();
    // const products = useSelector(state => state.products);
    console.log(products, 'yyyyyyyyyyyyyyy')

    useEffect(() => {
        getProducts(activeCategory);
    },[activeCategory,getProducts]);

    return (
        <>
      
            {/* <img>{products.image}</img> */}
            <Grid container spacing={1} direction='row' justifyContent='space-evenly' alignItems='center' >

                {products.map((prod, i) => {
                

                    if (prod.activeCategory === prod.category)
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
                                    <Button size="small" onClick={() => addTo(prod) }>ADD TO CART</Button>
                                    <Button size="small" component={Link} to={`/products/${products.id}`}>VIEW DETAILS</Button>
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
    products: state.products.products,
    activeCategory: state.categories.activeCategory
});

const mapDispatchToProps = {addTo , getProducts};

export default connect(mapStateToProps,mapDispatchToProps)(Product);