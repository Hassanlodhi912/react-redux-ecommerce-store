import axios from 'axios'
import { useEffect } from 'react'
import {setProducts} from "../../store/action/Index"
import { useDispatch, useSelector } from 'react-redux'

import ProductComponents from '../productComponents/ProductComponents'
const ProductListing = () => {
  const dispatch =useDispatch()
  const products =useSelector((state) => state);
  const fetchProducts = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{console.log("Error",err)})
  dispatch(setProducts(response.data))
  };
  useEffect(()=>{fetchProducts()},[])
  console.log("products:" , products);
  return (
    <div className="ui grid container">
      <ProductComponents/>

    </div>
  )
}

export default ProductListing
