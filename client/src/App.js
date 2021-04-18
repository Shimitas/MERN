import React from 'react'
import MoviesRouter from './Router'
import Welcome from './components/welcome.component'
import './App.css';

function App() {

  return (
    <div className="App">
      <Welcome/>
    <MoviesRouter/>
    </div>
  );
}

export const myNumbers=(num1,num2)=>{

  let sum=num1+num2;
  let avg=sum/2;
  return avg;

} 

export default App;
