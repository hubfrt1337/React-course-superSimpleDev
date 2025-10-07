import { formatMoney } from "../../utils/money"
import { useState } from "react"
import axios from "axios"
export function CartItemsDetails({ cartItem, loadCart }) {
    const [updating, setUpdating] = useState(false)
    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        loadCart();
    }
    const updateQuantity = () => {
        if(updating === false){
            setUpdating(true)
        } else 
        setUpdating(false)
    }
    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {updating 
                         ? <input 
                        type="text" 
                        style={{width: "50px", display: updating ? "inline-block" : "none"}}
                        with="50px"></input> 
                        : <span className="quantity-label">{cartItem.quantity}</span>
                    }
                    </span>
                    <span
                        className="update-quantity-link link-primary"
                        onClick={(updateQuantity)}
                    >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}