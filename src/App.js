
import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Authprovider from './components/Auth';
import StudentAdd from './components/StudentAdd';
import StudentUpdate from './components/StudentUpdate';
import StudentDelete from './components/StudentDelete';

function App() {
  return (
    <div className="App">
      <Authprovider>
    
     
      <Routes>
        
        <Route path="/" element={<Home/>}/>
     
        <Route path="/students-add" element={<StudentAdd/>}/>
        
        <Route path="/students-update/:id" element={<StudentUpdate/>}/> 
        <Route path="/students-delete/:id" element={<StudentDelete/>}/> 
      </Routes>
      
      </Authprovider>
    </div>
  );
}

export default App;
