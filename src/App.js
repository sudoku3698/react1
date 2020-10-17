import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

function App() {

  useEffect(()=>{
    console.log('mounted')
  },[])
  console.log('rendered App');
  return (
    <div className="App">
        <Image/>
    </div> 
  );
}

export default App;
