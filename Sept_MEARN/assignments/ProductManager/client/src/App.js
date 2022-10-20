import React from 'react';
import Main from './views/Main'
import Details from './views/details';
import './App.css';
import Form from './components/form';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Update from './views/update';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<Main/>} path= "/" />
      <Route element={<Details/>} path= "/projects/:id" />
      <Route element={<Update/>} path= "/projects/update/:id" />
    </Routes>
    </div>
  );
}

export default App;
