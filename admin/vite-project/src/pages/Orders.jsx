

import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../config";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  // 🍔 FETCH ORDERS
  const fetchAllOrders = async () => {
    if (!token) return

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.data.success) {
        setOrders(response.data.orders || [])
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  // 🔄 STATUS UPDATE (FOOD FLOW)
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        {
          orderId,
          status: event.target.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.data.success) {
        toast.success("Order status updated")
        fetchAllOrders()
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">

      <h3 className="text-2xl font-bold mb-6 text-[#06B6D4]"> Book Orders</h3>

      {orders.length === 0 ? (
        <p className="text-[#06B6D4]">No food orders found</p>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg p-5 flex md:flex-row flex-col gap-4 bg-[#111827] shadow-sm"
            >

              {/* ICON */}
              <img
                src={assets.parcel_icon}
                alt="order"
                className="w-12 h-12 mt-1"
              />

              {/* DETAILS */}
              <div className="flex-1 text-sm space-y-2">

                {/* CUSTOMER */}
                <p>
                  <b>Name:</b> {order.address?.firstName} {order.address?.lastName}
                </p>

                <p>
                  <b>Email:</b> {order.address?.email}
                </p>

                <p>
                  <b>Phone:</b> {order.address?.phone}
                </p>

                {/* ADDRESS */}
                <p className="text-[#06B6D4] mt-2">
                  <b>Delivery Address:</b><br />
                  {order.address?.street}, {order.address?.city}, {order.address?.state}, {order.address?.zipcode}
                </p>

                {/* FOOD ITEMS */}
                <div className="mt-3">
                  <b>Food Items:</b>

                  {order.items?.map((item, i) => (
                    <p key={i} className="ml-3">
                      🍽 {item.name || item.productId} × {item.quantity}
                    </p>
                  ))}
                </div>

                {/* PAYMENT */}
                <p className="mt-2">
                  <b>Payment:</b> {order.paymentMethod}
                </p>

                {/* PRICE */}
                <p>
                  <b>Total:</b> {currency}{order.amount}
                </p>

                {/* STATUS SELECT */}
                <select
                  value={order.status}
                  onChange={(e) => statusHandler(e, order._id)}
                  className="mt-3 bg-[#111827] px-2 py-1 rounded text-[#06B6D4] "
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Preparing">Preparing 🍳</option>
                  <option value="Ready">Ready 🍽</option>
                  <option value="Out for delivery">Out for delivery 🚴</option>
                  <option value="Delivered">Delivered ✅</option>
                </select>

              </div>

              {/* STATUS BADGE */}
              <div className="text-sm font-semibold">

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    order.status === "Order Placed"
                      ? "bg-yellow-500"
                      : order.status === "Preparing"
                      ? "bg-orange-500"
                      : order.status === "Ready"
                      ? "bg-blue-500"
                      : order.status === "Delivered"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                >
                  {order.status}
                </span>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default Orders