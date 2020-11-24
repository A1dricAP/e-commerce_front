import React from 'react'
import Layout from '../core/layout'
import {isAuthenticated} from '../auth/index'
import {Link} from 'react-router-dom'

const Dashboard=()=>{

    const {user:{_id,name,email,role}}=isAuthenticated()

    const userLinks=()=>{
        return(
            <div className='card'>
                <h4 className='card-header'>User Links</h4>
                <ul className='list-group'>
                    <li className='list-group-item' >
                        <Link className='nav-link' to='/cart'>My Cart</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to='/profile/update'>Update Profile.</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const UserInfo=()=>{
        return(
            <div className='card mb-5'>
                <h3 className='card-header'>User Info</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>{name}</li>
                    <li className='list-group-item'>{email}</li>
                    <li className='list-group-item'>{role === 1 ? "admin" : "Registered User"}</li>
                </ul>
            </div>
        )
    }

    const PurchaseHistory=()=>{
        return(
            <div className='card mb-5'>
                <h3 className='card-header'>Purchase History.</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>History</li>
                </ul>
            </div>
        )
    }
    return(

        <Layout title="Dashboard" description={`Good day, ${name}!`} className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    {userLinks()}
                </div>
                <div className='col-9'>
                    {UserInfo()}
                    {PurchaseHistory()}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard