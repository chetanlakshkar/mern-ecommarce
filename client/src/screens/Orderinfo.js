import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOrderById } from '../actions/orderActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { useParams } from 'react-router-dom'


export default function Orderinfo() {

    const dispatch = useDispatch()
    const{orderid} = useParams()
    const orderstate = useSelector(state => state.getOrderByIdReducer)

    const { order, loading, error } = orderstate
    useEffect(() => {
        dispatch(getOrderById(orderid))
    }, [dispatch])
    return (
        <div>
            {error && (<Error error='something went wrong' />)}
            {loading && (<Loader />)}
            {order && (<div>
                 <div className='row justify-content-center'>
                    <div className='col-md-5 card'>
                        <h2>Items In Your Order</h2>
                        <hr />
                        {order.orderItems.map(item => {
                            return <div className='orderitem'> <h1>{item.name}</h1>
                                <h1>Quantity : <b>{item.quantity}</b></h1>
                                <h1>Price:<b>{item.quantity}*{item.price}={item.quantity * item.price}</b></h1>
                                <hr />
                            </div>
                        })}
                    </div>
                    <div className='col-md-5 text-right card'>
                        <h2>Order Details</h2>
                        <hr />
                        <h3>Order Id : {order.id}</h3>
                        <h3>Total Amount: {order.orderAmount}</h3>
                        <h3>Date Of Order: {order.createdAt.substring(0, 10)}</h3>
                        <h3>Transaction ID: {order.transactionId}</h3>

                        {order.isDelivered ? (<h3>Order Delivered</h3>) : (<h3>Order Placed</h3>)}
                        <hr />
                        <div className='text-right'>
                            <h2>Shipping Details</h2>
                            <hr />
                            <h1 className='text-right'>Address :<b>{order.shippingAddress.address}</b></h1>
                            <h1 className='text-right'>City:<b>{order.shippingAddress.city}</b></h1>
                            <h1 className='text-right'>Country :<b>{order.shippingAddress.country}</b></h1>

                        </div>
                    </div>

                </div>
            </div>)}

            <hr />
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <h2 className='text-left'>Replacement Conditions</h2>
                    <p>Item received is physically damaged;
                        Item received has missing parts or accessories;
                        Item received is different from their description on the product detail page on Amazon.in; or
                        Item received is defective/does not work properly.</p>
                </div>
            </div>
        </div>
    )
}