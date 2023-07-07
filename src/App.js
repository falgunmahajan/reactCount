
import './App.css';
import { useState } from 'react';
function App() {
  let [counter, setCounter] = useState(0)
  const incrementCounter=(incrementValue)=>setCounter(counter+incrementValue)

  return (
    <div className="App container my-5">
    <Button onClickFunction={incrementCounter} increment={1}/>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Button onClickFunction={incrementCounter} increment={10}/>
    <Button onClickFunction={incrementCounter} increment={100}/>
    <Display counter={counter}/>
    <input/>
    <pre>{(new Date).toLocaleTimeString()}</pre>
    
    </div>
  );
}
function Button(props)
{
  const handleClick=()=>props.onClickFunction(props.increment)
  return (
    <button className='btn-lg px-5' onClick={handleClick}>+{props.increment}</button>
    );
}
function Display(props)
{
  return (
    <div>{props.counter}</div>
    );
}

export default App;
