import React from 'react'
import Layout from '../core/layout'
import {isAuthenticated} from '../auth/index'
import {Link} from 'react-router-dom'

const adminDashboard=()=>{

    const {user:{_id,name,email,role}}=isAuthenticated()

    const adminLinks=()=>{
        return(
            <div className='card'>
                <h4 className='card-header'>Admin Links</h4>
                <ul className='list-group'>
                    <li className='list-group-item' >
                        <Link className='nav-link' to='/create/category'>Create Category</Link>
                    </li>
                    <li className='list-group-item'>{email}
                        <Link className='nav-link' to='/create/product'>Create Product</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const AdminInfo=()=>{
        return(
            <div className='card mb-5'>
                <h3 className='card-header'>Admin Info</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>{name}</li>
                    <li className='list-group-item'>{email}</li>
                    <li className='list-group-item'>{role === 1 ? "admin" : "Registered User"}</li>
                </ul>
            </div>
        )
    }

   
    return(

        <Layout title="Dashboard" description={`Good day, ${name}!`} className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    {adminLinks()}
                </div>
                <div className='col-9'>
                    {adminInfo()}
                </div>
            </div>
        </Layout>
    )
}

export default adminDashboard