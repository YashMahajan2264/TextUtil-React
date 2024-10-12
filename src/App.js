import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes, // Change this line
//   Route,
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled', 'success');
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TEXTutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
            <TextForm heading="Enter the Text to Analyze below" mode={mode} />
       
        </div>

    </>
  );
}

export default App;
