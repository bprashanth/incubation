import logo from './logo.svg';
import './App.css';
import Row from './row';
import requests from './requests';
import { useRef, useState } from 'react';

function App() {
  const [clickedRowId, setClickedRowId] = useState(0);

  const clickedRowIdSetter = (newId) => {
    setClickedRowId(newId)
  }

  return (
    <div className="App">
      <Row fetchUrl={requests.fetchFourtyTwo} rowId={1} clickedRowId={clickedRowId} setClickedRowId={clickedRowIdSetter}/>
      <Row fetchUrl={requests.fetchFox} rowId={2} clickedRowId={clickedRowId} setClickedRowId={clickedRowIdSetter}/>
    </div>
  );
}

export default App;
