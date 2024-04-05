import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'; 
import Alert from './components/Alert';
{/*import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom"; */}

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      },3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2d3238';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/*<BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className='container my-2'>
    {/*<Routes>
        <Route  exact path = "/About" element = {<About />}/>
    </Routes>
  <Routes> */}
        {/* exact path = "/" element = */} <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
        
    {/*</Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </> 
  );
}

export default App;
