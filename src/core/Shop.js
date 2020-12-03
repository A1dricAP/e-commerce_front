import React,{useState,useEffect} from "react";
import Layout from "./layout";
import Card from './card'

const Shop=()=>{
    return(
        <Layout title="Shop page" description="Search and find your books!" className='container-fluid'>
            <div className='row'>
                <div className='col-4'>left sidebar</div>
                <div className='col-8'>right</div>
            </div>
        </Layout>
      ); 
}

export default Shop