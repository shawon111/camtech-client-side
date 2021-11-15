import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const DashboardMenu = () => {
    const { handleLogOut, adminStatus } = UseAuth();
    return (
        <div style={{textAlign: 'center'}} className="menu">
            {
                adminStatus && <>
                    <Link style={{marginBottom: '2px',display: 'inline-block'}} className="menu-item" to="/manageorders">Manage Orders</Link>
                    <Link style={{marginBottom: '2px',display: 'inline-block'}} className="menu-item" to="/manageproducts">Manage Products</Link>
                    <Link style={{marginBottom: '2px',display: 'inline-block'}} className="menu-item" to="/addproduct">Add Product</Link>
                    <Link style={{marginBottom: '2px',display: 'inline-block'}} className="menu-item" to="/makeadmin">Make Admin</Link>
                </>
            }
            {
               !adminStatus && <>
                <Link style={{marginBottom: '2px', display: 'inline-block'}} className="menu-item" to="/myorders">My Orders</Link>
                <Link style={{marginBottom: '2px', display: 'inline-block'}} className="menu-item" to="/addreview">Add Review</Link>
                <Link style={{marginBottom: '2px', display: 'inline-block'}} className="menu-item" to="/payment">Payment</Link>
            </>
            }
            <button onClick={handleLogOut} style={{ border: '0', cursor: 'pointer'}} className="menu-item">Logout</button>
        </div>
    );
};

export default DashboardMenu;