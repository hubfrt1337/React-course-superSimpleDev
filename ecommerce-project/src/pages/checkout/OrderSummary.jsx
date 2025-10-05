import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemsDetails } from "./CartItemsDetails";
import { DeliveryDate } from "./DeliveryDate";
export function OrderSummary({deliveryOption, cart}) {
    return (
<div className="order-summary">
    {deliveryOption.length > 0 && cart.map((cartItem => {
        return (
            <div key={cartItem.productId} className="cart-item-container">
                <DeliveryDate 
                deliveryOption={deliveryOption}
                cartItem={cartItem}
                />

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