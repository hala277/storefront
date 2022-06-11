import { connect } from "react-redux";
import { Typography } from "@mui/material";




const ActiveCategory = ({activeCategory}) => {
    console.log(activeCategory, 'ActiveCategoryyyyyyyyyyyy')
    return (
        <>
            {activeCategory &&
               
                    <Typography variant="h6" style={{ color:'gray'}}> Browse our Categories:{activeCategory}</Typography>
               
            }
        </>
    )
}

const mapStateToProps = state => ({
    activeCategory: state.categories.activeCategory
})

export default connect(mapStateToProps)(ActiveCategory)