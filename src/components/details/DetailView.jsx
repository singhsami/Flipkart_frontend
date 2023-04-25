import { useEffect } from 'react';
import { Box,styled ,Grid} from "@mui/material"
import ProductDetails from './ProductDetails';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
//import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/pruductActions';


const Component=styled(Box)`
background:#F2F2F2;
margin-top:55px;
` 

const Container=styled(Grid)(({theme})=> ({
  background:"#FFFFFF",
  display:"flex",
  [theme.breakpoints.down("md")]:{
    margin:0
  }
})) 


const RightContainer=styled(Grid)`
margin-top:55px;
padding-left:25;
`

const DetailView = () => {


  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id));
  }, [dispatch, product, id, loading]);

  return (

    <Component>

    {product && Object.keys(product).length &&
      <Container container>
        <Grid Item lg={4} md={4} sm={8} xs={12}>
        <ActionItem product={product}/>
        </Grid>
        
        <RightContainer Item lg={8} md={8} sm={8} xs={12}>
        
         <ProductDetails product={product}/>
        </RightContainer>
       
      </Container>}

    </Component>

  )
}

export default DetailView;