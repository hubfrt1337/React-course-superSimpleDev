import { useState, useEffect } from "react"
import axios from "axios"
import {Fragment} from "react"
import { Header } from "../../components/Header"
import { Link } from "react-router"
import buyIcon from "../../assets/images/icons/buy-again.png"
import "./Orders.css";
import { OrdersGrid } from "./OrdersGrid"
export function Orders({ cart }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get("/api/orders?expand=products")
      setOrders(response.data)
    }
    fetchOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  )
}