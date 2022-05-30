import { connect } from "react-redux";
import { Typography } from "@mui/material";


const ActiveCategory = props => {
    console.log(props.activeCategory, 'ActiveCategoryyyyyyyyyyyy')
    return (
        <>
            {props.activeCategory &&
                // <AppBar position="static" style={{ height:'40px'}}>
                    <Typography variant="h6" style={{ color:'gray'}}> Browse our Categories:{props.activeCategory}</Typography>
                // </AppBar>
            }
        </>
    )
}

const mapStateToProps = state => ({
    activeCategory: state.store.activeCategory
})

export default connect(mapStateToProps)(ActiveCategory)