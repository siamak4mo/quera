import React from "react";
const MAX_BARS = 50;

function Chart(props) {
  const data = props.data;
  const [bars, setBars] = React.useState([]);

  React.useEffect(()=>{
    if( data.length > 1 ){
      let newBars = [...bars];
      newBars.push( { len: calcBarLen(data[data.length-1]), isUp: pORm(data[data.length-2], data[data.length-1]) } )
      setBars(newBars)
    } else if( data.length == 1) {
      setBars([{len: calcBarLen(data[0]), isUp: true}]);
    }
  }, [data])

  return <div className="chartContainer">
    {
      getMAX_BARS(bars).map((bar, index)=>{
        return(<div className={classNameOfBar(bar)} key={index} style={{height:(bar.len)}} > </div>)
      })
    }
  </div>;
}


function getMAX_BARS(bars){
  if( bars.length <= MAX_BARS )
    return(bars)
  else
    return (bars.slice( bars.length - MAX_BARS ))
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function classNameOfBar(bar){
  if( bar.isUp == true )
    return "chart chart_up";
  else
    return "chart chart_down";
}

function pORm(ld1, ld2){
  if( ld2.value )
    return ( ld2.value - ld1.value >= 0 ) ? true : false;
  else
    return true;
}

function calcBarLen(lastData){
  return (lastData.value / 7900000) * 300;
}

export default Chart;
