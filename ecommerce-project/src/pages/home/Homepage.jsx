import axios from "axios"
import {Header} from "../../components/Header"
import {useState, useEffect} from "react"
import { ProductsGrid } from "./ProductsGrid"
import "./homepage.css"
export function Homepage({cart}) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("/api/products");
            setProducts(response.data)
        }
        fetchProducts();
    }, []);
    
    
  return (
    <>
    <title>Ecommerce-project</title>
    <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
        <Header cart={cart}/>

        <div className="home-page">
        <ProductsGrid products={products}/>
        </div>
    </>
  );
}