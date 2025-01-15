import React, { useState,useEffect } from "react";
import { HomeUI } from "./HomeUI";



function Home() {
  const [items,setItems] = useState([]);
  useEffect(() => { 
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(json => setItems(json))
    .catch(error => console.error(error))
  },[])

  return (
    <HomeUI items={items}/>
  );
}
export  { Home };




  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       const data = await fetch('https://api.escuelajs.co/api/v1/products')
  //       const parsedData = await data.json()
  //       setItems(parsedData)
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // },[])