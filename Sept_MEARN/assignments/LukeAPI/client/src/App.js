import logo from './logo.svg';
import './App.css';
import Form from './APIComponent/form';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import People from './APIComponent/people'
import Planet from './APIComponent/planets'


function App() {
  return (
    <div>
      <Form />
      <Routes>
        <Route path='/people/:id' element={<People/>} />
        <Route path='/planets/:id' element={<Planet/>} />
      </Routes>
    </div>
  );
}

export default App
