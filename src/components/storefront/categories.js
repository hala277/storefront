import { active } from '../../store/products';
import { connect } from 'react-redux';
import{Breadcrumbs,Link, Typography} from '@mui/material'
const Categories = props => {
    console.log(props,'prooops');
    return (
        
        // variant="text" underline="hover" color="inherit" href="/"
             <Breadcrumbs elevation ={3}>
                {props.categories.map((category,i) => {
                    return(
                        <>
                        <Link underline="hover" color="inherit"  key={i} onClick={() => props.active(category.normalizedName)} style={{marginBottom:'100px'}}>
                         {category.displayname}
                         </Link>
                         
                         </>
                    )
                })}
              
            </Breadcrumbs> 
        
    )
}

const mapStateToProps = state => ({categories:state.store.categories});

const mapDispatchToProps = {active};
export default connect(mapStateToProps,mapDispatchToProps)(Categories)