import React,{useState,useEffect} from "react";
import Layout from "./layout";
import {getProducts} from './apiCore'
import Card from './card'

const Home = () => {
  const [productsBySell, setproductsBySell]=useState([])
  const [productsByArrival, setproductsByArrival]=useState([])
  const [error, seterror]=useState(false)

  const loadProductBySell=()=>{
    getProducts('sold').then(data=>{
      if(data.error){
        seterror(data.error)
      }else{
        setproductsBySell(data)
      }
    })
  }

  const loadProductByArrival=()=>{
    getProducts('createdAt').then(data=>{
      if(data.error){
        seterror(data.error)
      }else{
        setproductsByArrival(data)
      }
    })
  }

  useEffect(()=>{
    loadProductByArrival()
    loadProductBySell()
  },[])

  return(
    <Layout title="Home page" description="Node React App" className='container-fluid'>
      <h2 className='mb-4 '>Best Sellers</h2>
      <div className='row'>
      {productsBySell.map((p,i)=>(
        <Card key={i} product={p}/>
      ))}
      </div>
      <h2 className='mb-4 '>New Arrivals</h2>
      <div className='row'>
      {productsByArrival.map((p,i)=>(
        <Card key={i} product={p}/>
      ))}
      </div>
    </Layout>
  );
}

export default Home;
