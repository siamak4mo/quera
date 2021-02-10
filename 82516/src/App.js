import React, { useEffect, useState } from "react";
import Chart from "./components/chart/Charts";
import StockCard from "./components/stockCard/StockCard";
import "./index.css";
const API = "http://localhost:3001/stock"



function App({ intervalTime }) {
  const [data, setData] = useState([]);

  useEffect(()=> { update(data, setData) },[]);
  
  useEffect(()=>{
      if(data.length !== 0)
      sleep(intervalTime).then(()=>{
        update(data, setData);
      })
    }, [data.length])

  return (
      <div className="container">
          <StockCard data={data} />
          <Chart data={data} />
      </div>
  );
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function mkGETreq( onRec ){
  fetch(API, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3001' ,
    },
  })
  .then(response => response.json())
  .then(response => {  onRec(mkDataObject(response));  })
  .catch((e) => {});
}


function mkDataObject( response ){
  return {name: response.name, value: response.value};
}


function update(data, setData){
  mkGETreq( (res)=> {
      var newData = [...data];
      newData.push( res )
      setData(newData);
     // console.log('**** val: ',res.value)
  })
}

export default App;
