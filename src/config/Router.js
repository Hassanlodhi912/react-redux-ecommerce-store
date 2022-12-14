import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Header from "../containers/header/Header"
import ProductDetail from "../containers/productDetail/ProductDetail"
import ProductListing from "../containers/productListing/ProductListing"
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
               
            </Routes>
        </BrowserRouter>

    )
}

export default Router
