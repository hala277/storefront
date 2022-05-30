import { connect } from "react-redux";
import { Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';

const ActiveCategory = props => {
    console.log(props.activeCategory, 'ActiveCategoryyyyyyyyyyyy')
    return (
        <>
            {props.activeCategory &&
                // <AppBar position="static" style={{ height:'40px'}}>
                    <Typography variant="h4" style={{ color:'gray'}}> Browse our Categories:{props.activeCategory}</Typography>
                // </AppBar>
            }
        </>
    )
}

const mapStateToProps = state => ({
    activeCategory: state.store.activeCategory
})

export default connect(mapStateToProps)(ActiveCategory)