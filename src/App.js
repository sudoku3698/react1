import React, {useEffect} from 'react';
import './App.css';
import Image from './Image';

function App() {

  useEffect(()=>{
    console.log('mounted')
  },[])
  console.log('rendered App');
  return (
    <div className="App">
      Sudoku
        <Image/>
    </div>
  );
}

export default App;
