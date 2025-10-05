import {Link} from "react-router"
import logo from "../../assets/images/logo.png"
import "./checkout-header.css"

export function CheckoutHeader({cart}) {
    let quantity = 0;
    cart.forEach(cartItem => {
        quantity += cartItem.quantity;
    })
    return (
        <>
        <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src={logo} />
                        <img className="mobile-logo" src={logo} />
                    </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">
                            {quantity}
                            {quantity  === 1 ? " item" : " items" }</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                    <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    )
}