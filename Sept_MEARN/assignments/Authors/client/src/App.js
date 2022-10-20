import React from 'react';
import Main from './views/Main'
import Details from './views/details';
import Create from './views/create'
import './App.css';
import Form from './components/form';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Update from './views/update';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<Main/>} path= "/" />
      <Route element={<Create/>} path="/add/author"/>
      <Route element={<Details/>} path= "/authors/:id" />
      <Route element={<Update/>} path= "/authors/update/:id" />
    </Routes>
    </div>
  );
}

export default App;
