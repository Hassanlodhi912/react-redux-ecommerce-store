import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  {Link} from "react-router-dom"
const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {

        const { id, title, category, price, image }=product;
        return (
            <div>
   
                        <Card sx={{ maxWidth: 240, marginTop:"40px" }} key={id}>
                        <Link to ={`/product/${id}`} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={image}
                                    alt={title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ${price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {category}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>

                        </Card>

                
            </div>


        )
    })
    return (

        <>
            {renderList}
        </>

    )
}

export default ProductComponents
