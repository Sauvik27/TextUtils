import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    },500);
  }
  const [btnColor, setbtnColor] = useState('primary')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setMyStyle({
        color: 'white',
        backgroundColor: '#212529'
      })
      document.body.style.backgroundColor = "#212529";
      setbtnColor('success');
      showAlert("Dark mode has been enabled");
    }
    else{
      setMode('light');
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = "white";
      setbtnColor('primary');
      showAlert("Light mode has been enabled");
    }
  }

  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About myStyle={myStyle}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze" myStyle={myStyle} btnColor={btnColor}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
