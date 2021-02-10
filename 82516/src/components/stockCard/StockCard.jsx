import React from "react";

function StockCard(props) {
  const data = props.data;
  const [title, setTitle] = React.useState('');
  const [percentage, setPercentage] = React.useState('');
  const [price, setPrice] = React.useState('');

  React.useEffect( ()=> {setNewValues(data[data.length-1], data[data.length-2])}, [data])

  function setNewValues(lastObj1, lastObj2){
    if( lastObj1 != null){
      setTitle( lastObj1.name );
      setPrice( lastObj1.value );
    }
    if( lastObj1 != null && lastObj2 != null){
      setPercentage ( calcPercentage(lastObj1.value, lastObj2.value) );//(lastObj1.value - lastObj2.value) );
    }
  }


  function calcPercentage(val1, val2){
    return(  ( (val1-val2)/(val2) ).toFixed(2)  );
  }
  
  
  function mkPercentage(){
    if( percentage != '' ){
    if ( percentage >= 0 )
        return (<div className="percentage_up">+{percentage}%</div>);
    else
        return (<div className="percentage_down">{percentage}%</div>);
    }else{
      return (<div className="percentage_up">...</div>);
    }
  }

  function mkArrow(){
    if ( percentage >= 0 )
        return (<div id="arrow" data-testid="arrow-element" className="up"/>);
    else  return (<div id="arrow" data-testid="arrow-element" className="down"/>);
  }


  return (
    <div className="stockContainer">
      <div className="header">
        {mkArrow()}
        <div className="title" data-testid="title-element">{(title != '') ? title : ""}</div>
      </div>
      <div className="info">
        <div id="percentage" data-testid="percentage-element">{mkPercentage(percentage)}</div>
        <div className="price" data-testid="price-element">{(price != '') ? price : ""}</div>
      </div>
    </div>
  );
}


export default StockCard;
