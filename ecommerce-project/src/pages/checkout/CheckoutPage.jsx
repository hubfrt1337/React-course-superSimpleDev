import axios from "axios"
import { useState, useEffect } from "react"
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import "./checkoutPage.css";
export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOption, setDeliveryOption] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)
    useEffect(() => {
        const fetchDeliveryOptions = async () => {
            const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
            setDeliveryOption(response.data)
        }
        const fetchPaymentSummary = async () => {
            const response = await axios.get("/api/payment-summary")
            setPaymentSummary(response.data)
        }
        fetchDeliveryOptions();
        fetchPaymentSummary();
    }, [cart])
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
            <title>Checkout</title>

            <CheckoutHeader cart={cart}></CheckoutHeader>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>
                <div className="checkout-grid">
                    <OrderSummary deliveryOption={deliveryOption} cart={cart} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary} 
                    loadCart={loadCart}/>
                </div>
            </div>
        </>
    )
}