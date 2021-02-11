import React from 'react';
import Input from './Input'
import cities from './cities.json'

const citiesLength = cities.length;


function App() {
   const [input, setInput] = React.useState('');
   const [hint,  setHint]  = React.useState('');

   React.useEffect( ()=> {
      setHint( getFirstSimilar(input) );
   }, [input]);
  
   return <div>
      <Input handleChange={(e)=>{setInput(e.target.value)}} hint={hint} /> 
   </div>
}

function getFirstSimilar(input){
   if( input.length > 0 )
   for( let i=0; i<cities.length; i++){
      if( cities[i].substring(0,input.length) === input)
         return cities[i]
   }
   return '';
}

export default App;
