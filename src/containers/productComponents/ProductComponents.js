import { useSelector } from 'react-redux'
import "./ProductComponents.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((products) => {
        const { id, title, category, price, image } = products;
        return (
            <div>
                
                        <Card sx={{ maxWidth: 240, marginTop: "20px" }} key={id}>
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
