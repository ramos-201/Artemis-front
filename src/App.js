import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ConnectionStatus from './components/ConnectionStatus/ConnectionStatus';
import Login from "./components/Auth/Login";

const theme = createTheme({
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});

function App() {
  return (
       <ThemeProvider theme={theme}>
           <Router>
               <Routes>
                   <Route path="/" element={<Login />}  />
                   <Route path="/conn-back" element={<ConnectionStatus />} />
                   {}
               </Routes>
           </Router>
       </ThemeProvider>
  );
}

export default App;
