import {NavLink} from "react-router"
import logoWhite from "../assets/images/logo-white.png"
import cartIcon from "../assets/images/icons/cart-icon.png"
import searchIcon from "../assets/images/icons/search-icon.png"
import { useState } from "react"
import {useNavigate, useSearchParams} from "react-router"
import "./Header.css"
export function Header({ cart }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const [text, setText] = useState(searchValue || "");

    let quantity = 0;
    cart.forEach(cartItem => {
        quantity += cartItem.quantity;
    })
    function search(){
        navigate(`/?search=${text}`)
    }
    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={logoWhite} />
                    <img className="mobile-logo"
                        src={logoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="search-bar" type="text" placeholder="Search" />

                <button 
                onClick={search}
                className="search-button">
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{quantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    )
}