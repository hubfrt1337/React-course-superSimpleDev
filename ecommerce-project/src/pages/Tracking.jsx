import axios from "axios";
import {useState, useEffect} from "react"
import { Header } from "../components/Header";
import { Link } from "react-router";
import { useParams } from "react-router";
import dayjs from "dayjs";
import "./Tracking.css";
export function Tracking( {cart}) {
    const {orderId, productId} = useParams();
    const [order, setOrder] = useState(null);
    useEffect(() => {
        axios.get(`/api/orders/${orderId}?expand=products`)
            .then(response => {
                setOrder(response.data)
            }) 
    }, [orderId]);
    if(!order) {
        return null;
    }
    const selectedProduct = order.products.find(product => {
        return product.product.id === productId;
    })
    const totalDeliveryTimeMs = selectedProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    let percent = (timePassedMs / totalDeliveryTimeMs ) * 100;
    if(percent > 100) {
        percent = 100;
    }
    let isPreparing = percent < 33;
    let isShipped = percent >= 33 && percent < 100;
    let isDelivered = percent === 100;
    return (
        <>
        <title>Tracking</title>
        <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
            <Header cart={cart}/>
            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                {percent >= 100 ? "Delivered" : "Arriving"} on {dayjs(selectedProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                    </div>

                    <div className="product-info">
                        {selectedProduct.product.name}
                    </div>

                    <div className="product-info">
                        {selectedProduct.quantity}
                    </div>

                    <img className="product-image" src={selectedProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipped && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${percent}%`}}></div>
                    </div>
                </div>
            </div>
        </>
    )

}