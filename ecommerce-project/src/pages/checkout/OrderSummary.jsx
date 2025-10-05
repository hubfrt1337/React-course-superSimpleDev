import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemsDetails } from "./CartItemsDetails";
export function OrderSummary({deliveryOption, cart}) {
    return (
<div className="order-summary">
    {deliveryOption.length > 0 && cart.map((cartItem => {
        const selectedDeliveryOption = deliveryOption.find(option => {
            return option.id === cartItem.deliveryOptionId;
        })
        return (
            <div key={cartItem.productId} className="cart-item-container">
                <div className="delivery-date">
                    Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                </div>

                <div className="cart-item-details-grid">
                    <CartItemsDetails cartItem={cartItem} />
                    <DeliveryOptions 
                    deliveryOption={deliveryOption} 
                    cartItem={cartItem} />
                    
                </div>
            </div>
        )
    }))}
</div>
    )
}