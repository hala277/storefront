// import { active } from '../../store/categories';
import { useEffect,useCallback } from 'react';
import { connect } from 'react-redux';
import { category,getCategory } from '../../store/categories';
import{Breadcrumbs,Link} from '@mui/material'
const Categories = props => {
    console.log(props,'prooops');

    const {getCategory,category,categories,activeCategory} = props;
  const load = useCallback(getCategory,[getCategory])

  console.log(load,'llllllllllllllllll')

  useEffect(() => {
      load();
  },[load]);
    return (
        
        // variant="text" underline="hover" color="inherit" href="/"
             <Breadcrumbs elevation ={3}>
                {categories.map((categor,i) => {
                    return(
                        <>
                        <Link underline="hover" color="inherit"  key={i} onClick={() => category(categor.normalizedName)} style={{marginBottom:'100px'}}>
                         {categor.displayname}
                         </Link>
                         
                         </>
                    )
                })}
              
            </Breadcrumbs> 
        
    )
}

const mapStateToProps = state => ({categories:state.categories.categoryL,
activeCategory:state.categories.activeCategory});

const mapDispatchToProps = { category,getCategory};
export default connect(mapStateToProps,mapDispatchToProps)(Categories)