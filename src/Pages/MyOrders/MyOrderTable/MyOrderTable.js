import React, { useEffect, useState } from 'react';
import './MyOrderTable.css';

const MyOrderTable = ({myOrder}) => {
    const {productId, _id, status} = myOrder;

    //load ordered product data
    const [product, setProduct] = useState({});
    const {name, price} = product;
    useEffect(()=>{
        fetch(`https://serene-beyond-56458.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    },[])

    //cancel an order
    const handleCancelOrder = (id) => {
        if(window.confirm("Are you sure want to cancel this order?")){
            fetch(`https://serene-beyond-56458.herokuapp.com/deleteorder/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                alert('Order cancelled successfully!');
                window.location.reload();
            }
        })
        }else{
            alert('Order not cancelled')
        }
        
    }

    //update order status
    let orderStatus;
    if (status) {
        orderStatus = "Approved";
    } else {
        orderStatus = "Pending";
    }

    return (
        <div>
            <div className="order-info">
                <div className="product-name"><h4>{name}</h4></div>
                <div className="product-name"><h4>Price: ${price}</h4></div>
                <div className="order-status">
                    <button className="brand-btn">{orderStatus}</button>
                </div>
                <div className="cancel-order">
                    <button onClick={()=> handleCancelOrder(_id)} className="primary-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrderTable;