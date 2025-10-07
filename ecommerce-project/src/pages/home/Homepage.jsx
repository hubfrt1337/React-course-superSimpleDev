import axios from "axios"
import {Header} from "../../components/Header"
import {useState, useEffect} from "react"
import { ProductsGrid } from "./ProductsGrid"
import { useSearchParams } from "react-router"
import "./homepage.css"
export function Homepage({cart, loadCart}) {
    const [products, setProducts] = useState([])
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");
    useEffect(() => {
        const fetchProducts = async () => {
            const urlPath = search ? `/api/products?search=${search}`: "/api/products"
            const response = await axios.get(urlPath);
            setProducts(response.data)
        }
        fetchProducts();
    }, [search]);
    
    
  return (
    <>
    <title>Ecommerce-project</title>
    <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
        <Header cart={cart}/>

        <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
        </div>
    </>
  );
}