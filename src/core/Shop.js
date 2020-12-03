import React,{useState,useEffect} from "react";
import Layout from "./layout";
import Card from './card'
import {getCategories} from './apiCore'
import CheckBox from './checkBox'

const Shop=()=>{
    const [categories, setCategories]=useState([])
    const [error, setError]=useState(false)

     //load categories and set formData
     const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setCategories(data)
            }
        });
    };

    useEffect(()=>{
        init()
    },[])

    return(
        <Layout title="Shop page" description="Search and find your books!" className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <h4>Filter by categories!</h4>
                    <ul>
                    <CheckBox categories={categories}/>
                    </ul>
                </div>
                <div className='col-8'>right</div>
            </div>
        </Layout>
      ); 
}

export default Shop